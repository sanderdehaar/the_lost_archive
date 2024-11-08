import Button from '../button/button';

const Settings = () => {
  return (
    <div className="settings">
      <Button text="EN" href="#" className="button-class" />
      <Button text={<><i className="fa-solid fa-circle-info"></i></>} href="#" className="button-class" />
    </div>
  );
};

export default Settings;