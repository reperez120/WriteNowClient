import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./SentenceGeneratorPage.css"

class SentenceGeneratorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        genre: '',
        firstArticle: '',
        secondArticle: '',
        space: '',
        punctuation: '',
        subjectAdjective: [],
        subject: [],
        verb: [],
        preposition: [],
        article: '',
        locationAdjective: [],
        location: [],
        punctuation: [],
        downloadPromptText: '',
        loading: false
      };
    }

    handleGenre = e => {
        this.setState({
            genre: e.target.value
        });
    } 

    handleFormSubmit = e => {
        e.preventDefault()
        this.setState({ loading: true })

        const options = {
            method: 'GET',
        }
        const url = 'https://calm-hamlet-15286.herokuapp.com/words?';
    
        function formatQueryParams(params) {
        const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${params[key]}`)
        return queryItems.join('&');
        }

        let getWord = (wordType) =>  { 
            const params = {
                type: wordType,
                genre: this.state.genre,
            }
            const genreQueryString = formatQueryParams(params);
            const api = url + genreQueryString;
            
        fetch(api, options)
        .then(response => response.json())
            .then(data => {
                let newWord = data[Math.floor(Math.random() * data.length)]
                let word = newWord.word
                if (wordType === 'sub-adj') 
                    this.setState ({
                    subjectAdjective: word
                })
                if (wordType === 'subject') 
                    this.setState ({
                    subject: word
                    })
                if (wordType === 'loc-adj')
                  this.setState ({
                    locationAdjective: word
                    })
                if (wordType === 'location')
                     this.setState ({
                        location: word
                })
            })
        } 

        let getGenrelessWord = (wordType) =>  { 
            const params = {
                type: wordType,
            }
            const genreQueryString = formatQueryParams(params);
            const api = url + genreQueryString;
            
        fetch(api, options)
        .then(response => response.json())
            .then(data => {
                let newWord = data[Math.floor(Math.random() * data.length)]
                let word = newWord.word
                if (wordType === 'verb')
                this.setState ({
                    verb: word
                })
                if (wordType === 'preposition')
                this.setState ({
                    preposition: word
                })
                if (wordType === 'subject') 
                this.setState ({
                subject: word
                 })
                if (wordType === 'loc-adj')
                    this.setState ({
                        locationAdjective: word
                    }) 
                if (wordType === 'location')
                this.setState ({
                    location: word
               }) 
               if (wordType === 'sub-adj') 
               this.setState ({
               subjectAdjective: word
               })  
            })
        } 

        let getSentence = () => {
            this.setState
            ({
                firstArticle: 'The',
                secondArticle: 'the',
                space: ' ',
                punctuation: '.',
                loading: false
             })
            getGenrelessWord('verb')
            getGenrelessWord('preposition')
            if (this.state.genre === 'wildcard') {
                getGenrelessWord('sub-adj')
                getGenrelessWord('subject')
                getGenrelessWord('loc-adj')
                getGenrelessWord('location')
            } else {
                getWord('sub-adj')
                getWord('subject')
                getWord('loc-adj')
                getWord('location')
            }   
            console.log(this.state)  
        }

        getSentence()

        let downloadPrompt = ()  => {
            const element = document.createElement("a");
            const file = new Blob([document.getElementById('promptDownload').value], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = "WriteNowPrompt.txt";
            document.body.appendChild(element); 
            element.click();
        }

    }  

    render() {
        const sentence = this.state.firstArticle + this.state.space + this.state.subjectAdjective + this.state.space + this.state.subject + this.state.space + this.state.verb + this.state.space + this.state.preposition + this.state.space + this.state.secondArticle + this.state.space + this.state.locationAdjective + this.state.space + this.state.location + this.state.punctuation

      return (
          
        <div className='SentenceGenerator'>
            <header className='appHeader'>
                <h2 className='description'>
                    Select a genre. Then click the "write now" button to get a writing prompt in that genre. 
                    Select "wild card" or click on the "write now" button without selecting anything to 
                    get a sentence that combines elements from all the genres.
                </h2>
            </header>
            <main> 
                <form className='radioForm' onSubmit={this.handleFormSubmit}>
                    <fieldset>
                        <legend>literary genre</legend>
                        <div className='radioButtons'>
                            <label className='scifiButton'>
                                <input id="scifi" type="radio" className='radioButton' value="scifi" name="option" 
                                    checked={this.state.genre === 'scifi'}
                                    onChange={this.handleGenre}/> 
                            </label>
                            <label className='fantasyButton'>
                                <input id="fantasy" type="radio" className='radioButton' value="fantasy" name="option" 
                                    checked={this.state.genre === 'fantasy'}
                                    onChange={this.handleGenre}/> 
                            </label>
                            <label className='horrorButton'>
                                <input id="horror" type="radio" className='radioButton' value="horror" name="option" 
                                    checked={this.state.genre === 'horror'}
                                    onChange={this.handleGenre}/> 
                            </label>
                            <label className='westernButton'>
                                <input id ="western" type="radio" className='radioButton' value="western" name="option" 
                                    checked={this.state.genre === 'western'}
                                    onChange={this.handleGenre}/> 

                            </label>
                            <label className='litButton'>
                                <input id="lit" type="radio" className='radioButton' value="lit" name="option" 
                                checked={this.state.genre === 'lit'}
                                onChange={this.handleGenre}/> 
                            </label>
                            <label className='wildcardButton'>
                                <input id="wildcard" type="radio" className='radioButton' value="wildcard" name="option" 
                                checked={this.state.genre === 'wildcard'}
                                onChange={this.handleGenre}/>
                            </label>
                            </div>
                    <button type='submit' className='writeButton'>
                        Write now!
                    </button>  
                    <Link to="/">
                        <button className='homeBotton'>
                            Home
                        </button>  
                    </Link> 
                    </fieldset> 
                </form>
                {this.state.loading ? <h1>Loading...</h1>: null}
                <h3 id="promptSentence">
                     {sentence} 
                </h3>   
                <input 
                    id="promptDownload" 
                     value={sentence}
                /> 
                    <button className="downloadButton"
                    onClick={this.downloadPrompt}>
                    {this.state.downloadPromptText}
                </button>
                <div className='credit'>images by Shane Kearney</div>
            </main>
       </div>
      );
    } 
  }

  export default SentenceGeneratorPage;
