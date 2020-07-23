import React from 'react';
import './FullCourse.css';
import Navbar from './Navbar';
import ModalPage from './ModalPage';

function FullCourse() {
    /*for loops to be added.*/
    return (
        <div className="body">

            <div className="container-fluid">
                <div className="row content">
                    <div className="head-with-nav-icon md-col-1">
                        <Navbar />
                    </div>
                    <div className="head md-col-8">
                        <p className="headWelcome">AMUSING !!</p>
                        <p className="tagline">Are your exams already here  ;p </p>
                    </div>
                </div>
            </div>
            <div className="main container">
                <div className="sem-card">
                
                    <div className="row cards">
                        <a href="https://www.google.com/"><div className="card1"><p>1</p></div></a>
                        <a href="https://www.google.com/"><div className="card2"><p>2</p></div></a>
                        <a href="https://www.google.com/"><div className="card3"><p>3</p></div></a>
                        <a href="https://www.google.com/"><div className="card4"><p>4</p></div></a>
                        <a href="https://www.google.com/"><div className="card5"><p>5</p></div></a>
                        <a href="https://www.google.com/"><div className="card6"><p>6</p></div></a>
                    </div>
                    <div className="row cards">
                        <a href="https://www.google.com/"><div className="card1"><p>7</p></div></a>
                        <a href="https://www.google.com/"><div className="card2"><p>8</p></div></a>
                        <a href="https://www.google.com/"><div className="card3"><p>9</p></div></a>
                        <a href="https://www.google.com/"><div className="card4"><p>10</p></div></a>
                        <a href="https://www.google.com/"><div className="card5"><p>11</p></div></a>
                        <a href="https://www.google.com/"><div className="card6"><p>12</p></div></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FullCourse;