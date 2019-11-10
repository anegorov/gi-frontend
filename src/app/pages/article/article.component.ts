import { Component, OnInit } from '@angular/core';
import {Article} from "../../mocks/Article";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article:Article;

  constructor(private ArticleService: ArticleService) { }

  ngOnInit() {
    this.article = this.ArticleService.getArticleById("a1");
  }

}
