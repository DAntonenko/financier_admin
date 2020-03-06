import * as React from 'react';
import './authorization.css';
import { SimpleLoader } from '../../components/simple-loader/simple-loader';
import { TextInput } from '../../components/controls/text-input/text-input';
import { Checkbox } from '../../components/controls/checkbox/checkbox';
import { Button } from '../../components/controls/button/button';

export class Authorization extends React.Component {

  public render() {
    return (
      <main className='authorization'>
        <section className='authorization__window'>
          <h1 className='authorization__title'>Админка</h1>
          <form className='authorization__form'>
            {
              false &&
              <div className='authorization__preloader'>
                <SimpleLoader className='authorization__preloader-image' />
              </div>
            }
            <TextInput
              className='authorization__text-input'
              tabIndex={1}
              containerClassName='login-form__field'
              id='email'
              data-name='email'
              // value={login.email}
              placeholder={'Email'}
              autoComplete='on'
              // onChange={this.onChange}
            />
            <TextInput
              className='authorization__text-input'
              tabIndex={2}
              type='password'
              id='password'
              data-name='password'
              // value={login.password}
              placeholder={'Пароль'}
              autoComplete='on'
              // onChange={this.onChange}
            />
            <Checkbox
              className='authorization__checkbox'
              state={false}
              text='Запомнить меня'
            />
            <Button
              tabIndex={3}
              className='authorization__submit-button'
              type='submit'
              text='Войти'
            />
          </form>
        </section>
      </main>
    );
  }
}
