# `googleFirebaseHostingChannel` Submodule <a name="`googleFirebaseHostingChannel` Submodule" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingChannel <a name="GoogleFirebaseHostingChannel" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel google_firebase_hosting_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_channel.GoogleFirebaseHostingChannel;

GoogleFirebaseHostingChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .channelId(java.lang.String)
    .siteId(java.lang.String)
//  .expireTime(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .retainedReleaseCount(java.lang.Number)
//  .timeouts(GoogleFirebaseHostingChannelTimeouts)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.channelId">channelId</a></code> | <code>java.lang.String</code> | Required. Immutable. A unique ID within the site that identifies the channel. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Required. The ID of the site in which to create this channel. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The time at which the channel will be automatically deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#id GoogleFirebaseHostingChannel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Text labels used for extra metadata and/or filtering. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.retainedReleaseCount">retainedReleaseCount</a></code> | <code>java.lang.Number</code> | The number of previous releases to retain on the channel for rollback or other purposes. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.channelId"></a>

- *Type:* java.lang.String

Required. Immutable. A unique ID within the site that identifies the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#channel_id GoogleFirebaseHostingChannel#channel_id}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Required. The ID of the site in which to create this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#site_id GoogleFirebaseHostingChannel#site_id}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.expireTime"></a>

- *Type:* java.lang.String

The time at which the channel will be automatically deleted.

If null, the channel
will not be automatically deleted. This field is present in the output whether it's
set directly or via the 'ttl' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#expire_time GoogleFirebaseHostingChannel#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#id GoogleFirebaseHostingChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Text labels used for extra metadata and/or filtering.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#labels GoogleFirebaseHostingChannel#labels}

---

##### `retainedReleaseCount`<sup>Optional</sup> <a name="retainedReleaseCount" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.retainedReleaseCount"></a>

- *Type:* java.lang.Number

The number of previous releases to retain on the channel for rollback or other purposes.

Must be a number between 1-100. Defaults to 10 for new channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#retained_release_count GoogleFirebaseHostingChannel#retained_release_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#timeouts GoogleFirebaseHostingChannel#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Input only.

A time-to-live for this channel. Sets 'expire_time' to the provided
duration past the time of the request. A duration in seconds with up to nine fractional
digits, terminated by 's'. Example: "86400s" (one day).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#ttl GoogleFirebaseHostingChannel#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetRetainedReleaseCount">resetRetainedReleaseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseHostingChannelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a>

---

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetRetainedReleaseCount` <a name="resetRetainedReleaseCount" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetRetainedReleaseCount"></a>

```java
public void resetRetainedReleaseCount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseHostingChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_channel.GoogleFirebaseHostingChannel;

GoogleFirebaseHostingChannel.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_channel.GoogleFirebaseHostingChannel;

GoogleFirebaseHostingChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_channel.GoogleFirebaseHostingChannel;

GoogleFirebaseHostingChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_channel.GoogleFirebaseHostingChannel;

GoogleFirebaseHostingChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseHostingChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirebaseHostingChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseHostingChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseHostingChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseHostingChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference">GoogleFirebaseHostingChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.retainedReleaseCountInput">retainedReleaseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.retainedReleaseCount">retainedReleaseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.timeouts"></a>

```java
public GoogleFirebaseHostingChannelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference">GoogleFirebaseHostingChannelTimeoutsOutputReference</a>

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `retainedReleaseCountInput`<sup>Optional</sup> <a name="retainedReleaseCountInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.retainedReleaseCountInput"></a>

```java
public java.lang.Number getRetainedReleaseCountInput();
```

- *Type:* java.lang.Number

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `retainedReleaseCount`<sup>Required</sup> <a name="retainedReleaseCount" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.retainedReleaseCount"></a>

```java
public java.lang.Number getRetainedReleaseCount();
```

- *Type:* java.lang.Number

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingChannelConfig <a name="GoogleFirebaseHostingChannelConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_channel.GoogleFirebaseHostingChannelConfig;

GoogleFirebaseHostingChannelConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .channelId(java.lang.String)
    .siteId(java.lang.String)
//  .expireTime(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .retainedReleaseCount(java.lang.Number)
//  .timeouts(GoogleFirebaseHostingChannelTimeouts)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.channelId">channelId</a></code> | <code>java.lang.String</code> | Required. Immutable. A unique ID within the site that identifies the channel. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Required. The ID of the site in which to create this channel. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The time at which the channel will be automatically deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#id GoogleFirebaseHostingChannel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Text labels used for extra metadata and/or filtering. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.retainedReleaseCount">retainedReleaseCount</a></code> | <code>java.lang.Number</code> | The number of previous releases to retain on the channel for rollback or other purposes. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

Required. Immutable. A unique ID within the site that identifies the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#channel_id GoogleFirebaseHostingChannel#channel_id}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Required. The ID of the site in which to create this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#site_id GoogleFirebaseHostingChannel#site_id}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

The time at which the channel will be automatically deleted.

If null, the channel
will not be automatically deleted. This field is present in the output whether it's
set directly or via the 'ttl' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#expire_time GoogleFirebaseHostingChannel#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#id GoogleFirebaseHostingChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Text labels used for extra metadata and/or filtering.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#labels GoogleFirebaseHostingChannel#labels}

---

##### `retainedReleaseCount`<sup>Optional</sup> <a name="retainedReleaseCount" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.retainedReleaseCount"></a>

```java
public java.lang.Number getRetainedReleaseCount();
```

- *Type:* java.lang.Number

The number of previous releases to retain on the channel for rollback or other purposes.

Must be a number between 1-100. Defaults to 10 for new channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#retained_release_count GoogleFirebaseHostingChannel#retained_release_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.timeouts"></a>

```java
public GoogleFirebaseHostingChannelTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#timeouts GoogleFirebaseHostingChannel#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Input only.

A time-to-live for this channel. Sets 'expire_time' to the provided
duration past the time of the request. A duration in seconds with up to nine fractional
digits, terminated by 's'. Example: "86400s" (one day).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#ttl GoogleFirebaseHostingChannel#ttl}

---

### GoogleFirebaseHostingChannelTimeouts <a name="GoogleFirebaseHostingChannelTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_channel.GoogleFirebaseHostingChannelTimeouts;

GoogleFirebaseHostingChannelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#create GoogleFirebaseHostingChannel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#delete GoogleFirebaseHostingChannel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#update GoogleFirebaseHostingChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#create GoogleFirebaseHostingChannel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#delete GoogleFirebaseHostingChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_hosting_channel#update GoogleFirebaseHostingChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingChannelTimeoutsOutputReference <a name="GoogleFirebaseHostingChannelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_channel.GoogleFirebaseHostingChannelTimeoutsOutputReference;

new GoogleFirebaseHostingChannelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingChannel.GoogleFirebaseHostingChannelTimeouts">GoogleFirebaseHostingChannelTimeouts</a>

---



