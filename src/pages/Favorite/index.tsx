import { useAppSelector } from '../../hooks/storeHook';
import { FavoriteSlice } from '../../store/reducers/favoriteReducer';
import * as C from './style'
import * as GridStyle from '../Countries/style';
import { CountryItem } from '../../components/CountryItem';

const FavoritePage = ()=> {


    const favorites = useAppSelector(state => state.favorite.favoriteArr);

    
    if(favorites.length === 0) {
        return <div>
            No Favorite country
        </div>
    }else 

    return (
        <GridStyle.CountryGrid>
            {
                favorites.map((e) => {
                    return <CountryItem {...e} key={e.population} />
                })
            }
        </GridStyle.CountryGrid>
    )
}



export default FavoritePage;