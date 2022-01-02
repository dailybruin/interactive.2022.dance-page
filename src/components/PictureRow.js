import React from 'react';
import styled from 'styled-components';


const Creds = styled("div")`
  position: absolute;
  bottom: 20px;
  right: 50px;
  color: black;
  font-weight: bold;
`;

    
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33.333333%);

    grid-column-gap: 0;
    grid-row-gap: 35px;
    width: 100%;
    justify-content: center;
    object-fit: cover;
    height: 85vh;


}
`;







export default function PictureRow(props){
    return (
        <>
            <Grid>
                
                <img src="https://media.istockphoto.com/photos/beauty-of-classic-ballet-ballerina-is-performing-classic-dance-picture-id859091172?k=20&m=859091172&s=612x612&w=0&h=GiDbjgjy1f2Q5PHLTWqGsyognj7wzDsDVQexrRCpCZg="/>
                <img src = "https://rachelneville.com/wp-content/uploads/2018/11/10.14.18.SamanthaSchaubach-0416.jpg"/>
                <img src = "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
    
                
            </Grid>


            <Creds>
                Credits here!
            </Creds>
        </>
    )

}