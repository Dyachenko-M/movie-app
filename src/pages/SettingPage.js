import { useDispatch} from "react-redux";
import { changeTheme } from "../store/ThemeSlice";
import Switch from '@mui/material/Switch';
import { useSelector } from "react-redux";

const SettingPage = () => {
    const dispatch = useDispatch()
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const theme = useSelector((state) => state.theme.theme);
    
    return(
        <div style={theme === 'white' ? {color: 'black'}: {color: 'white'}}>
            Change theme
            <Switch {...label} onChange={() => dispatch(changeTheme())} />
        </div>
    )
}

export default SettingPage