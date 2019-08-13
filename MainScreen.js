import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import Header from './Components/Header';
import InputBar from './Components/InputBar';
import TodoItem from './Components/TodoItem'; 
import LoadingScreen from './Components/LoadingScreen';
import Spinner from 'react-native-loading-spinner-overlay';

class MainScreen extends Component {
  constructor () {
    super ();

    this.state = {
      todoInput : '',
      todos : [
        { id : 0, title : 'Buy laptop sleeve', done : false},
        { id : 1, title : 'Buy headset stand', done : false},
      ]
    }
  }

  state = {
    loading: false,
  };

  // componentDidMount() {
  //   //Setting a timer to show the spinner demo in every 3 second
  //   setInterval(() => {
  //     this.setState({
  //       //change the state of the laoding in every 3 second
  //       loading: !this.state.loading,
  //     });
  //   }, 3000);
  // }

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id : todos.length + 1,
      title : this.state.todoInput,
      done: false
    });

    this.setState({
      todos : todos, 
      todoInput : 'text'
    });
  }

  toggleDone (item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    })

    this.setState({todos});
  }

  removeTodo (item) {
    let todos = this.state.todos;

    todos = todos.filter((todo) => todo.id !== item.id);

    this.setState({todos});
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {/* <Spinner
          //visibility of Overlay Loading Spinner
          visible={this.state.loading}
          //Text with the Spinner 
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        /> */}

        <Header title = "TODO APP"/>
        <InputBar 
          textChange = {todoInput => this.setState({todoInput})}
          addNewTodo = { () => this.addNewTodo()}
        />
        <FlatList
          data = {this.state.todos}
          extraData = {this.state}
          keyExtractor = {(item, index) => index.toString()}
          renderItem = {({item, index}) => {
            return (
              <TodoItem 
                todoItem = {item} 
                toggleDone = {() => this.toggleDone(item)} 
                removeTodo = {() => this.removeTodo(item)}
              />
            )
          }}
        />
        <View style = {styles.container}>
          <Text>{this.state.todoInput}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default MainScreen;