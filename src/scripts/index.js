import '../assets/scss/styles.scss';

export class Index {

  constructor() {
    console.log('init App');
  }

  getTodosData() {
    return  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
  }

  getPostsData() {
    return  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
  }

  async init() {
    const todos = await this.getTodosData();
    const posts = await this.getPostsData();

    return {
      todos,
      posts
    }

  }

}
