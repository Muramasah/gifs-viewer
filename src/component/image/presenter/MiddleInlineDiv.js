import InlineDiv from './InlineDiv';

const MiddleInlineDiv = InlineDiv.extend`
    object-fit: cover;
    vertical-align: middle;
    width: auto;
    max-width: 100%;
    margin: 0.1rem;
`;

export default MiddleInlineDiv