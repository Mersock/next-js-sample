import Link from 'next/link';

const PostLink = (props) => (
    <li><Link as={`/${props.slug}`} href={`/post?title=${props.title}`}><a>{props.title}</a></Link></li>
);

export default PostLink;