import styled from 'styled-components';

export const MoviesContainer = styled.section `
    padding: 25 px;
    //background: 
    //border: 1px solid black;
    //border-radius: 10px;

    li{
        display: table-row;
        text-align: center;
        padding-top: 35px;
        font-family: monospace;
        font-size: 16px;

    }

    img{
        width: 200px;
        border-radius: 5px;
    }


/* mobile styles */
@media screen and (min-width: 320px) {

    ul {

display: grid;
grid-template-columns: auto;
padding: 2;


}
}

/* small tablet styles */
@media screen and (min-width: 620px) {

    ul {

display: grid;
grid-template-columns: auto auto;
padding: 2;


}
    


}

/* large tablets and laptop styles */

@media screen and (min-width: 960px) {


}

/* desktop styles */

@media screen and (min-width: 1200px) {

    ul {

display: grid;
grid-template-columns: auto auto auto auto;
padding: 2;


}

}

`