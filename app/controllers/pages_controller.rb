class PagesController < ApplicationController
  def home
  end

  def about
  end

  def graphisme
  end

  def troisd
  end

  def animation
  end

  def design
  end

  def architecture
  end

  def portfoliopdf
    send_file(Rails.root.join("public", "assets", "portfolio_2020.pdf").to_s, :disposition => "inline", :type => "application/pdf")
  end
end
