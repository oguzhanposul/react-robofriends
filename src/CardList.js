import React, { Fragment } from 'react';
import Card from "./Card";

const CardList = ({robots}) =>{
    // const cardsArray = robots.map((user, index)=> {
    //     return <Card key={index} id={user.id} name={user.name} email={user.email} />
    // });

    return(
        <Fragment>
            {
                robots.map((user, index)=> {
                return <Card key={index} id={user.id} name={user.name} email={user.email} />
            })
            }
        </Fragment>
    );
};

export default CardList;
