import { registerBlockType } from '@wordpress/blocks';
import { TextControl, SelectControl } from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';

//  Import CSS.
import './editor.scss';
import './style.scss';

registerBlockType( 'cgb/block-custom-block-rating', {
  title: 'レーティング用のブロック',
  description: 'レーティングを表示するためのブロックです。',
  // MEMO: アイコン一覧 https://developer.wordpress.org/resource/dashicons/
  icon: 'star-empty',
  category: 'layout',
  // MEMO: 検索する際のキーワードを指定
  keywords: [
    'レーティング',
    '装飾',
  ],

  // MEMO: 入力された値を保存するための属性を追加
  attributes: {
    ratingTitle: {
      type: 'string',
      default: '',
    },
    humanText: {
      type: 'string',
      default: '',
    },
    ratingSelect: {
      type: 'string',
      default: '',
    },
    ratingText: {
      type: 'string',
      default: '',
    },
  },

  edit: ({ attributes: { ratingTitle, humanText, ratingSelect, ratingText }, setAttributes }) => {
    const options = [
      { value: '-', label: '評価を選択してください' },
      { value: 1, label: '★' },
      { value: 2, label: '★★' },
      { value: 3, label: '★★★' },
      { value: 4, label: '★★★★' },
      { value: 5, label: '★★★★★' },
    ];

    return (
      <div className="wp-block-cgb-block-my-block rating-content">
        <RichText
          value={ratingTitle}
          onChange={newText => setAttributes({ ratingTitle: newText })}
          tagName="h2"
          placeholder="タイトルを入力してください"
          keepPlaceholderOnFocus={false}
        />
        <TextControl
          value={humanText}
          onChange={newText => setAttributes({ humanText: newText })}
          tagName="span"
          placeholder="人物像を入力してください"
          keepPlaceholderOnFocus={false}
        />
        <SelectControl
          options={options}
          value={ratingSelect}
          onChange={newId => setAttributes({ ratingSelect: newId })}
        />
        <RichText
          value={ratingText}
          onChange={newText => setAttributes({ ratingText: newText })}
          tagName="p"
          placeholder="本文を入力してください"
          keepPlaceholderOnFocus={false}
        />
      </div>
    );
  },

  save: ({ attributes: { ratingTitle, humanText, ratingSelect, ratingText } }) => {
    return (
      <div className="rating-content">
        <RichText.Content value={ratingTitle} tagName="h2" />
        <span className="human">{humanText}</span>
        <div className={`rating-${ ratingSelect }`}>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </div>
        <RichText.Content value={ratingText} tagName="p" />
      </div>
    );
  },
});
