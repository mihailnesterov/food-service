import React, {FC, useState} from 'react';
import Recipe from './recipes/Recipe';

/**
 * Блок с моими рецептами в профиле пользователя
 * @returns JSX
 */
const PersonalMyRecipes: FC = () => {

    document.title = "Мои рецепты";

    const [recipes, setRecipes] = useState<any | null>(['Шарлотка','Шарлотка','Шарлотка']); // список рецептов

	return( // цикл по сохраненным рецептам
        recipes && recipes.length > 0 &&
        recipes.map((recipeId: any) => <Recipe key={recipeId} recipeId={recipeId} />)
    );
};

export default PersonalMyRecipes;