import clsx from 'clsx';
import './Card.scss';

const Card = ({ title, children, className = '' }) => {
	return (
		<div className={clsx('card', className)}>
			{title && <div className="card__title">{title}</div>}
			<div className="card__body">{children}</div>
		</div>
	);
};

export default Card;
