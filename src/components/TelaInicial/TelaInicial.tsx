import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './TelaInicial.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:20 */
export const TelaInicial: FC<Props> = memo(function TelaInicial(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.mesasComandas}>Mesas | Comandas</div>
      <div className={classes.rectangle2}></div>
      <div className={classes._2639919CartShopping4}></div>
      <div className={classes._2639919CartShopping3}></div>
      <div className={classes._2639919CartShopping2}></div>
      <div className={classes.comandaOuMesa}>Comanda ou Mesa</div>
      <div className={classes.line1}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.inserirItem}>
        <div className={classes.textBlock}>Inserir</div>
        <div className={classes.textBlock2}> Item</div>
      </div>
      <div className={classes.rectangle23}></div>
      <div className={classes.verDetalhes}>
        <div className={classes.textBlock3}>Ver</div>
        <div className={classes.textBlock4}>Detalhes</div>
      </div>
      <div className={classes._2639919CartShopping1}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes._352020ArrowBack1}></div>
    </div>
  );
});
