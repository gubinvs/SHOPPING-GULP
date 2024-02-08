<?php
//запускаю сессию для работы с глобальной переменной
// -- Создаю переменные
    $token = "1670273806:AAED917Gd7nWkgDDq_TKv2GRZFe9ens1W8w"; //В переменную $token нужно вставить токен, который нам прислал @botFather
    $new_url = 'https://gubinvs.ru/lean/messageok.html';
    $chat_id = "538615330"; //Сюда вставляем chat_id
    
    //Определяем переменные для передачи данных из нашей формы
    if ($_POST['act'] == 'order') {
        $site = 'Снабжение';
        $tel = ($_POST['tel']);  // Телефон для связи

        //Собираем в массив то, что будет передаваться боту
        $arr = array(
            'Site:' => $site,
            'Tel' => $tel,
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

        // //Выводим сообщение об успешной отправке

        // if ($sendToTelegram) {
        //     echo "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.";
        //     header('Location: ' . $new_url_true);
        // }

        // //А здесь сообщение об ошибке при отправке
        // else {
        //     echo "Ваше сообщение не отправлено. Что-то поломалось! Очень жаль.";
        //     // header('Location: ' . $new_url_false);
        // }
    }
