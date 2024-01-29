<?php
//запускаю сессию для работы с глобальной переменной
    $connectorSQL = new mysqli("gubinv.beget.tech", "gubinv_request", "E%ezxe4j", "gubinv_request"); // Инициализация коннектора к базе данных SQL
    // -- Создаю переменные
    $token = "1670273806:AAED917Gd7nWkgDDq_TKv2GRZFe9ens1W8w"; //В переменную $token нужно вставить токен, который нам прислал @botFather
    $new_url = 'https://gubinvs.ru/lean/messageok.html';
    $chat_id = "538615330"; //Сюда вставляем chat_id
    $validation = "/^(http|https|ftp):\/\/([A-Z0-9][A-Z0-9_-]*(?:\.[A-Z0-9][A-Z0-9_-]*)+):?(\d+)?\/?/i"; // Проверка на наличие ссылки

    // проверка подключения
    if (!$connectorSQL) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Принял данные (методом post) инициализируем и присваиваем значение переменным данными из сообщения.
    if ($_POST['act'] == 'order') {
        $date = (date("d.m.y"));            // Получаем текущую дату
        $name = ($_POST['name']);         // Имя отправителя
        $email = ($_POST['email']);       // Адрес электронной почты
        $tel = ($_POST['tel']);           // Телефон для связи
        $message = ($_POST['message']);   // Текст сообщения
    }

    // Добавление данных в таблицу
    $inst = "INSERT INTO `request_massage`(`date`, `name`, `mail`, `tel`, `massage`) VALUES ('$date','$name','$email','$tel','$message')";

    if ($connectorSQL->query($inst)) {
        header('Location: ' . $new_url);
        // header('Content-Type: text/html; charset=utf-8');
        // echo "Все удачно";
        // header('Content-Type: text/html; charset=utf-8');
    } else {
        // header('Location: ' . $new_url); 
        // header('Content-Type: text/html; charset=utf-8');
        echo "Ваше сообщение не отправлено. Что-то поломалось! Очень жаль.";
    }

    // -- завершение соединения с базой
    $connectorSQL->close();

    
//-- Дополнительно отправляем сообщение телеграмм боту ----------------------------------------


    //Определяем переменные для передачи данных из нашей формы
    if ($_POST['act'] == 'order') {
        $site = 'Снабжение';
        $name = ($_POST['name']);         // Имя отправителя
        $email = ($_POST['email']);       // Адрес электронной почты
        $tel = ($_POST['tel']);           // Телефон для связи
        $message = ($_POST['message']);   // Текст сообщения

        //Собираем в массив то, что будет передаваться боту
        $arr = array(
            'Site:' => $site,
            'Name:' => $name,
            'E-mail: ' => $email,
            'Tel' => $tel,
            'Сообщение: ' => $message
        );

        //Настраиваем внешний вид сообщения в телеграме
        foreach ($arr as $key => $value) {
            $txt .= "<b>" . $key . "</b> " . $value . "%0A";
        };


        // если ссылок нет продолжаем отправку, если нет заканчиваем
        if ((bool)preg_match($validation, $message) === false) {

            //Передаем данные боту
            $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
            header('Content-Type: text/html; charset=utf-8');
            header('Location: ' . $new_url);
        } else {
            // echo 'There is a link in the post';
        }

        //Выводим сообщение об успешной отправке

        // if ($sendToTelegram) {
        //     echo "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.";
        //     header('Location: ' . $new_url_true);
        // }

        // //А здесь сообщение об ошибке при отправке
        // else {
        //     echo "Что-то пошло не так, позвоните нам пока мы чиним!";
        //     header('Location: ' . $new_url_false);
        // }
    }

?>