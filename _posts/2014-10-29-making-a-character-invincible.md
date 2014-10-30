---
layout:     post
title:      Making a character invincible
date:       2014-10-29 12:00:00
permalink:  making-a-character-invincible
categories: 
    - phaser
    - tutorial
comments:   true
---

Earlier this month I helped answer a user back on the HTML5 GameDev forums <a href="http://www.html5gamedevs.com/topic/9970-invincible-for-a-while-when-you-hit/#entry58847" target="_blank">on how to work with invincibility</a>. I thought it would be an interesting subject to expand upon and thus, this tiny tutorial was born.

![Man of steel]({{site.baseurl}}/assets/phaser/superman.jpg)

###That which can't be conquered

Being invincible means that, within a given context, someone or something can't be defeated, destroyed or killed. The first definition is seldom seen in games as losing is an integral part of the experience.

Think of Mario Kart's star item, with which your character cannot be harmed by shells and other items. While you cannot be *destroyed* by others you can be *defeated* as you can still fall, waste time and come in last - therefore the challenge is never removed, the player is only given a temporary bonus.

![borderlands 2 bee shield immunity]({{site.baseurl}}/assets/phaser/borderlands.jpg)

In game design, the terms invulnerability and invencibility are often used as synonyms but some games, such as Final Fantasy or Borderlands, allow you to be partially vulnerable (being resistant to certain types of damage).

###Can't hit me twice!

A common type of invincibility comes in the form of preventing further damage to a character after receiving an initial blow. Think of games like Street Rage and BattleToads. This is pretty easy to do with Phaser, normally what I would do, within the player entity file, is this:

{% highlight javascript %}
create: function() {
    player.invincible = false;
}

onHit: function(damage) {
    if (!player.invincible) { //We only damage the player if not invincible
      player.health -= damage;

      //We now need to make the player invincible
      player.invincible = true;
      
      //and then we add a timer to restore the player to a vulnerable state
      game.time.events.add(2000, (function() {
           player.invincible = false;
      }), this); 
    }
}
{% endhighlight %}

###Who's the boss?

Some games have this mechanic in more than one place though - a boss that has multiple weak points that can only be hit once every two seconds, little creatures that are invulnerable after taking fire damage, the player being invulnerable after any damage... Our code from before could be adapted to this:

{% highlight javascript %}
create: function() {
    boss.invincible = false; //same idea as before
}

//We refactor onHit so that we can pass a specific entity
//And pass for how long invulnerability should last
onHit: function(entity, damage, invulTime) {
    if (!entity.invincible) {
      entity.health -= damage;

      //we toggle invincibility
      this.toggleInvincible(entity); 
      
      //Just as before, we add a timer to restore vulnerability.
      //This time, however, we a pass a fourth argument
      //Which in turn is passed to the toggleInvincible function
      game.time.events.add(invulTime, this.toggleInvincible, this, entity); 
    }
}

toggleInvincible: function(entity) {
    entity.invincible = !entity.invincible;
}
{% endhighlight %}

As you can see, this approach is far more flexible (and cleaner!).

###Did I fire 5 timers or 6?

You can see how easy this is made with Phaser timers, the logic is simple (we are just changing a boolean after some time) and we get great flexibility from it. This code is similar to what you would use to pace the how many shots can be made or when implementing temporary buffs.

Would you implement it differently? Post in the comments below!