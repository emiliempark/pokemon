import { css } from 'styled-components';

const styles = css`
    width: 100%;
    ul{
        list-style: none;
        display: flex;
        li.card{
            display: block;
            border: 1px solid black;
            box-sizing: border-box;
            padding: 16px;
            margin: 8px;
            border-radius: 4px;
            &.filled{
                background: white;
                color: black;
                
            }
        }
    }
`;

export default styles;
