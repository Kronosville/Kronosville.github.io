class Skin < Liquid::Tag
  def initialize(tag_name, player_name, tokens)
    super
    @player_name = player_name
  end

  def render(context)
    "<td><img src=\"https://crafatar.com/renders/body/#{@player_name}?helm&scale=5\"></td>"
  end
end

Liquid::Template.register_tag('skin', Skin)
