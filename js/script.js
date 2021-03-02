'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  console.log('clickedElement (with plus): ' + clickedElement);
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector:', articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle:', targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  console.log('titleList:', titleList);
  titleList.innerHTML = '';

  /* [DONE] find all the articles and save them to variable: articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles:', articles);

  let html = '';

  /* for each article */

  for(let article of articles){

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');
    console.log('articleId:', articleId);

    /* find the title element */


    /* [DONE] get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log('articleTitle:', articleTitle);

    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML:', linkHTML);

    /* [DONE] insert link into into html variable */

    html = html + linkHTML;
    console.log('html:', html);

  }

  /* [DONE] insert link into titleList */

  titleList.innerHTML = html;
  console.log('titleList:', titleList);

  /* [DONE] find witch link is clicked*/

  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  console.log('generateTitleLinks is done');
}

generateTitleLinks();

function generateTags(){
  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles:', articles);

  /* START LOOP: for every article: */

  for(let article of articles){

    /* [DONE] find tags wrapper */

    const tagsWrapperList = article.querySelector(optArticleTagsSelector);
    console.log('tagsWrapperList:', tagsWrapperList);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags:', articleTags);

    /* [DONE] split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray:', articleTagsArray);

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){

      console.log('tag:', tag);

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log('linkHTML:', linkHTML);

      /* [DONE] add generated code to html variable */

      html = html + linkHTML + ' ';
      console.log('html:', html);

    /* END LOOP: for each tag */

    }

    /* [DONE] insert HTML of all the links into the tags wrapper */

    tagsWrapperList.innerHTML = html;
    console.log('tagsWrapperList:', tagsWrapperList);

  /* END LOOP: for every article: */

  }

  console.log('generateTags is done');
}

generateTags();
