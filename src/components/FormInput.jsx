import React from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            year: '',
            description: '',
            isComplete: false,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onAuthorChangeEventHandler = this.onAuthorChangeEventHandler.bind(this);
        this.onYearChangeEventHandler = this.onYearChangeEventHandler.bind(this);
        this.onDescriptiChangeEventHandler = this.onDescriptiChangeEventHandler.bind(this);
        this.onIsCompleteChangeEventHandler = this.onIsCompleteChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onAuthorChangeEventHandler(event) {
        this.setState(() => {
            return {
                author: event.target.value,
            }
        });
    }

    onYearChangeEventHandler(event) {
        this.setState(() => {
            return {
                year: event.target.value,
            }
        });
    }

    onDescriptiChangeEventHandler(event) {
        this.setState(() => {
            return {
                description: event.target.value,
            }
        });
    }

    onIsCompleteChangeEventHandler(event) {
        this.setState(() => {
            return {
                isComplete: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addBook(this.state);
    }

    render() {
        return (
            <form id="inputBook" onSubmit={this.onSubmitEventHandler}>
                <div className="input">
                    <label htmlFor="inputBookTitle">Judul</label>
                    <input id="inputBookTitle" type="text" required value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                </div>
                <div className="input">
                    <label htmlFor="inputBookAuthor">Penulis</label>
                    <input id="inputBookAuthor" type="text" required value={this.state.author} onChange={this.onAuthorChangeEventHandler}/>
                </div>
                <div className="input">
                    <label htmlFor="inputBookYear">Tahun</label>
                    <input id="inputBookYear" type="number" required value={this.state.year} onChange={this.onYearChangeEventHandler}/>
                </div>
                <div className="input">
                    <label htmlFor="inputBookDescription">Deskripsi</label>
                    <input id="inputBookDescription" type="text" required value={this.state.description} onChange={this.onDescriptiChangeEventHandler}/>
                </div>
                <div className="input_inline">
                    <label htmlFor="inputBookIsComplete">Selesai dibaca</label>
                    <input id="inputBookIsComplete" type="checkbox" value={this.state.isComplete} onChange={this.onIsCompleteChangeEventHandler}/>
                </div>
                <button id="bookSubmit" type="submit">Masukkan Buku ke rak <span>Belum selesai dibaca</span></button>
            </form>
        );
    }
}

export default FormInput;