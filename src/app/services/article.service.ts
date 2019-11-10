import { Injectable } from '@angular/core';
import { ARTICLES } from '../mocks/mock.articles';
import { Article } from "../mocks/Article";

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  getArticles(){
    return Promise.resolve(ARTICLES);
  }

  getArticleById(id:string):Article{
    return ARTICLES.find(x => x.id==id);    
  }
}
