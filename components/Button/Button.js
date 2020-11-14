const Button = ({ children, ...props }) => (
  <>
    <button {...props}>{children}</button>
    <style jsx>{`
      button {
        background: linear-gradient(
          to right,
          #e61e4d 0%,
          #e31c5f 50%,
          #d70466 100%
        );
        border-radius: 8px;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        margin: 20px 20px 0 0;
        max-width: 380px;
        outline: none;
        padding: 14px 24px;
        position: relative;
        text-align: center;
        text-decoration: none;
        touch-action: manipulation;
        width: 100%;
      }

      .secondary {
        background: linear-gradient(to right, #f3a683 0%, #f19066 100%);
      }
    `}</style>
  </>
);

export default Button;