import PropTypes from 'prop-types';

const HomeIcon = ({ onClick, disabled }) => {
  return (
    <div
      className={`home-icon ${disabled ? 'disabled' : ''}`}
      onClick={!disabled ? onClick : null}
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/96dd/ad19/6b5d8793ffd0e809fade21936b5d24f8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WKx0ev1uTRWbu2un08aK5nPEsAEMW0EAF78Vfp5a6u0w9w2WpzXzqGavtq8k~b-ZHl~CUH~6aR5ozKDuIgGg5lwPB~WjTO9RV7deOrV8r7ZFl1i6a47wpuq6l0B0ABEeuFaSvrGQAt8QwKctfSjws2OgFggm4jUeXbXD0-6aVYtTibS5jR5-gJiEHJjL8gbNybICzggz0XikLPhIVHxPzzwW7rqrU3upnKdAumeXYTLBFsRic1Sb5zAgydotUR~SPfjlYWhz8~RPvXriQ~eUpyI3fsEVR90NBnJQxWcMYysc1jWQAeauzVgb0T16KgN2-lzjknrS5hEClewAqtSxmg__"
        alt="Home"
      />
    </div>
  );
};

HomeIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

HomeIcon.defaultProps = {
  disabled: true,
};

export default HomeIcon;