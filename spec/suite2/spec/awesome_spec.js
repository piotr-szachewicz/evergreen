require('/foo.js')

describe('awesome', function() {
  template('foo.html');

  it('requires public files', function() {
    expect(foo).toEqual('The Foo');
  });
  it('loads templates', function() {
    expect(document.getElementById('foo').innerHTML).toEqual('The foo template');
  });
});
