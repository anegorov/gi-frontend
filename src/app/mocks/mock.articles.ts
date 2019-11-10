import { Article } from "./Article";

export const ARTICLES: Article[] = [
    {
        "id":"a1",
        "tags":["лампа","освещение","ночник"],
        "sname":"Лампа настольная",
        "lname":"Лампа настольная из дерева",
        "body":[{
                "title":"Материалы",
                "size":false,
                "images":["assets\\sources\\brus-28-28-2000.png",
                        "assets\\sources\\cabl-switcher.png",
                        "assets\\sources\\lamp-patron.png"],
                "text":"Для изготовления лампы понадобится брусок 2200х45х45 мм."
        },
        {
            "title":"Сборка",
            "size":false,
            "images":["assets\\catalog\\f-gulliver\\f-gulliver-main.jpg"],                    
            "text":"Для изготовления лампы понадобится брусок 2200х45х45 мм."
        }],
        "link":"lampa-nastolnaya-is-dereva.html"        
    }
]