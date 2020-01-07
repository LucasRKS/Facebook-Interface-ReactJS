import React, { Component } from 'react';

import './PostList.css';

class PostList extends Component {
  state = {
    posts = [
      {
        id: 1,
        author : {
          name: "João Miguel",
          avatar: "url"
        },
        date: "04 Jan 2020",
        content: "In his or any harold sea parasites. Adieu his befell within he seemed not losel labyrinth, oh was to and.",
        comments: [
          {
            id: 1,
            author: {
              name: "Júlio Cocielo",
              avatar : "url"
            },
            content: "Tuled kyt sumha ere thez buthuruth mezuul buol olelothya werud. Eses scouuo hyul thudothlon ezes bel hul mogomnok halal. Ne halal keguggethuk byuntelen eses tuled syrou, fyon en ullyetuk bezzeg."
          }
        ]
      },
      {
        id: 2,
        author : {
          name: "Lucas Rogerio",
          avatar: "url"
        },
        date: "05 Jan 2020",
        content: "In his or any harold sea parasites. Adieu his befell within he seemed not losel labyrinth, oh was to and.",
        comments: [
          {
            id: 2,
            author: {
              name: "Maria Rosa",
              avatar : "url"
            },
            content: "Tuled kyt sumha ere thez buthuruth mezuul buol olelothya werud. Eses scouuo hyul thudothlon ezes bel hul mogomnok halal. Ne halal keguggethuk byuntelen eses tuled syrou, fyon en ullyetuk bezzeg."
          },
          {
            id: 3,
            author: {
              name: "Roberto Barbosa",
              avatar : "url"
            },
            content: "Tuled kyt sumha ere thez buthuruth mezuul buol olelothya werud. Eses scouuo hyul thudothlon ezes bel hul mogomnok halal. Ne halal keguggethuk byuntelen eses tuled syrou, fyon en ullyetuk bezzeg."
          }
        ]
      }
    ]
  };

  render() {
    return (<div>
      teste
    </div>);
  }
}

export default PostList;