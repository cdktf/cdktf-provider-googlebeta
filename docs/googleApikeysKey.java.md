# `googleApikeysKey` Submodule <a name="`googleApikeysKey` Submodule" id="@cdktf/provider-google-beta.googleApikeysKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApikeysKey <a name="GoogleApikeysKey" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key google_apikeys_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKey;

GoogleApikeysKey.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .restrictions(GoogleApikeysKeyRestrictions)
//  .timeouts(GoogleApikeysKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the key. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of this API key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#id GoogleApikeysKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the key.

The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#name GoogleApikeysKey#name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable display name of this API key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#display_name GoogleApikeysKey#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#id GoogleApikeysKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#project GoogleApikeysKey#project}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.restrictions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#restrictions GoogleApikeysKey#restrictions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#timeouts GoogleApikeysKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetRestrictions">resetRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRestrictions` <a name="putRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putRestrictions"></a>

```java
public void putRestrictions(GoogleApikeysKeyRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putTimeouts"></a>

```java
public void putTimeouts(GoogleApikeysKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetProject"></a>

```java
public void resetProject()
```

##### `resetRestrictions` <a name="resetRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetRestrictions"></a>

```java
public void resetRestrictions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApikeysKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKey;

GoogleApikeysKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKey;

GoogleApikeysKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKey;

GoogleApikeysKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKey;

GoogleApikeysKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApikeysKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApikeysKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApikeysKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApikeysKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApikeysKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.keyString">keyString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference">GoogleApikeysKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.restrictionsInput">restrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyString`<sup>Required</sup> <a name="keyString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.keyString"></a>

```java
public java.lang.String getKeyString();
```

- *Type:* java.lang.String

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.restrictions"></a>

```java
public GoogleApikeysKeyRestrictionsOutputReference getRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.timeouts"></a>

```java
public GoogleApikeysKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference">GoogleApikeysKeyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.restrictionsInput"></a>

```java
public GoogleApikeysKeyRestrictions getRestrictionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApikeysKeyConfig <a name="GoogleApikeysKeyConfig" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyConfig;

GoogleApikeysKeyConfig.builder()
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
    .name(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .restrictions(GoogleApikeysKeyRestrictions)
//  .timeouts(GoogleApikeysKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the key. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of this API key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#id GoogleApikeysKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the key.

The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#name GoogleApikeysKey#name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable display name of this API key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#display_name GoogleApikeysKey#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#id GoogleApikeysKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#project GoogleApikeysKey#project}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.restrictions"></a>

```java
public GoogleApikeysKeyRestrictions getRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#restrictions GoogleApikeysKey#restrictions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.timeouts"></a>

```java
public GoogleApikeysKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#timeouts GoogleApikeysKey#timeouts}

---

### GoogleApikeysKeyRestrictions <a name="GoogleApikeysKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictions;

GoogleApikeysKeyRestrictions.builder()
//  .androidKeyRestrictions(GoogleApikeysKeyRestrictionsAndroidKeyRestrictions)
//  .apiTargets(IResolvable)
//  .apiTargets(java.util.List<GoogleApikeysKeyRestrictionsApiTargets>)
//  .browserKeyRestrictions(GoogleApikeysKeyRestrictionsBrowserKeyRestrictions)
//  .iosKeyRestrictions(GoogleApikeysKeyRestrictionsIosKeyRestrictions)
//  .serverKeyRestrictions(GoogleApikeysKeyRestrictionsServerKeyRestrictions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.androidKeyRestrictions">androidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | android_key_restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.apiTargets">apiTargets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a>></code> | api_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.browserKeyRestrictions">browserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | browser_key_restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.iosKeyRestrictions">iosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a></code> | ios_key_restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.serverKeyRestrictions">serverKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a></code> | server_key_restrictions block. |

---

##### `androidKeyRestrictions`<sup>Optional</sup> <a name="androidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.androidKeyRestrictions"></a>

```java
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictions getAndroidKeyRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a>

android_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#android_key_restrictions GoogleApikeysKey#android_key_restrictions}

---

##### `apiTargets`<sup>Optional</sup> <a name="apiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.apiTargets"></a>

```java
public java.lang.Object getApiTargets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a>>

api_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#api_targets GoogleApikeysKey#api_targets}

---

##### `browserKeyRestrictions`<sup>Optional</sup> <a name="browserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.browserKeyRestrictions"></a>

```java
public GoogleApikeysKeyRestrictionsBrowserKeyRestrictions getBrowserKeyRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a>

browser_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#browser_key_restrictions GoogleApikeysKey#browser_key_restrictions}

---

##### `iosKeyRestrictions`<sup>Optional</sup> <a name="iosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.iosKeyRestrictions"></a>

```java
public GoogleApikeysKeyRestrictionsIosKeyRestrictions getIosKeyRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a>

ios_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#ios_key_restrictions GoogleApikeysKey#ios_key_restrictions}

---

##### `serverKeyRestrictions`<sup>Optional</sup> <a name="serverKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.serverKeyRestrictions"></a>

```java
public GoogleApikeysKeyRestrictionsServerKeyRestrictions getServerKeyRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a>

server_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#server_key_restrictions GoogleApikeysKey#server_key_restrictions}

---

### GoogleApikeysKeyRestrictionsAndroidKeyRestrictions <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions;

GoogleApikeysKeyRestrictionsAndroidKeyRestrictions.builder()
    .allowedApplications(IResolvable)
    .allowedApplications(java.util.List<GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications">allowedApplications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>></code> | allowed_applications block. |

---

##### `allowedApplications`<sup>Required</sup> <a name="allowedApplications" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications"></a>

```java
public java.lang.Object getAllowedApplications();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>>

allowed_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#allowed_applications GoogleApikeysKey#allowed_applications}

---

### GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications;

GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.builder()
    .packageName(java.lang.String)
    .sha1Fingerprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName">packageName</a></code> | <code>java.lang.String</code> | The package name of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>java.lang.String</code> | The SHA1 fingerprint of the application. |

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName"></a>

```java
public java.lang.String getPackageName();
```

- *Type:* java.lang.String

The package name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#package_name GoogleApikeysKey#package_name}

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint"></a>

```java
public java.lang.String getSha1Fingerprint();
```

- *Type:* java.lang.String

The SHA1 fingerprint of the application.

For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#sha1_fingerprint GoogleApikeysKey#sha1_fingerprint}

---

### GoogleApikeysKeyRestrictionsApiTargets <a name="GoogleApikeysKeyRestrictionsApiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsApiTargets;

GoogleApikeysKeyRestrictionsApiTargets.builder()
    .service(java.lang.String)
//  .methods(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.property.service">service</a></code> | <code>java.lang.String</code> | The service for this restriction. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The service for this restriction.

It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#service GoogleApikeysKey#service}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

Optional.

List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#methods GoogleApikeysKey#methods}

---

### GoogleApikeysKeyRestrictionsBrowserKeyRestrictions <a name="GoogleApikeysKeyRestrictionsBrowserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions;

GoogleApikeysKeyRestrictionsBrowserKeyRestrictions.builder()
    .allowedReferrers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers">allowedReferrers</a></code> | <code>java.util.List<java.lang.String></code> | A list of regular expressions for the referrer URLs that are allowed to make API calls with this key. |

---

##### `allowedReferrers`<sup>Required</sup> <a name="allowedReferrers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers"></a>

```java
public java.util.List<java.lang.String> getAllowedReferrers();
```

- *Type:* java.util.List<java.lang.String>

A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#allowed_referrers GoogleApikeysKey#allowed_referrers}

---

### GoogleApikeysKeyRestrictionsIosKeyRestrictions <a name="GoogleApikeysKeyRestrictionsIosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsIosKeyRestrictions;

GoogleApikeysKeyRestrictionsIosKeyRestrictions.builder()
    .allowedBundleIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds">allowedBundleIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of bundle IDs that are allowed when making API calls with this key. |

---

##### `allowedBundleIds`<sup>Required</sup> <a name="allowedBundleIds" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds"></a>

```java
public java.util.List<java.lang.String> getAllowedBundleIds();
```

- *Type:* java.util.List<java.lang.String>

A list of bundle IDs that are allowed when making API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#allowed_bundle_ids GoogleApikeysKey#allowed_bundle_ids}

---

### GoogleApikeysKeyRestrictionsServerKeyRestrictions <a name="GoogleApikeysKeyRestrictionsServerKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsServerKeyRestrictions;

GoogleApikeysKeyRestrictionsServerKeyRestrictions.builder()
    .allowedIps(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps">allowedIps</a></code> | <code>java.util.List<java.lang.String></code> | A list of the caller IP addresses that are allowed to make API calls with this key. |

---

##### `allowedIps`<sup>Required</sup> <a name="allowedIps" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps"></a>

```java
public java.util.List<java.lang.String> getAllowedIps();
```

- *Type:* java.util.List<java.lang.String>

A list of the caller IP addresses that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#allowed_ips GoogleApikeysKey#allowed_ips}

---

### GoogleApikeysKeyTimeouts <a name="GoogleApikeysKeyTimeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyTimeouts;

GoogleApikeysKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#create GoogleApikeysKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#delete GoogleApikeysKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#update GoogleApikeysKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#create GoogleApikeysKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#delete GoogleApikeysKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apikeys_key#update GoogleApikeysKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList;

new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get"></a>

```java
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>>

---


### GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference;

new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput">packageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput">sha1FingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName">packageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput"></a>

```java
public java.lang.String getPackageNameInput();
```

- *Type:* java.lang.String

---

##### `sha1FingerprintInput`<sup>Optional</sup> <a name="sha1FingerprintInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput"></a>

```java
public java.lang.String getSha1FingerprintInput();
```

- *Type:* java.lang.String

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName"></a>

```java
public java.lang.String getPackageName();
```

- *Type:* java.lang.String

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint"></a>

```java
public java.lang.String getSha1Fingerprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>

---


### GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference;

new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications">putAllowedApplications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedApplications` <a name="putAllowedApplications" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications"></a>

```java
public void putAllowedApplications(IResolvable OR java.util.List<GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications">allowedApplications</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput">allowedApplicationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedApplications`<sup>Required</sup> <a name="allowedApplications" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications"></a>

```java
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList getAllowedApplications();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a>

---

##### `allowedApplicationsInput`<sup>Optional</sup> <a name="allowedApplicationsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput"></a>

```java
public java.lang.Object getAllowedApplicationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue"></a>

```java
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---


### GoogleApikeysKeyRestrictionsApiTargetsList <a name="GoogleApikeysKeyRestrictionsApiTargetsList" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsApiTargetsList;

new GoogleApikeysKeyRestrictionsApiTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.get"></a>

```java
public GoogleApikeysKeyRestrictionsApiTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a>>

---


### GoogleApikeysKeyRestrictionsApiTargetsOutputReference <a name="GoogleApikeysKeyRestrictionsApiTargetsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsApiTargetsOutputReference;

new GoogleApikeysKeyRestrictionsApiTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods">resetMethods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods"></a>

```java
public void resetMethods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput">methodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput"></a>

```java
public java.util.List<java.lang.String> getMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a>

---


### GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference;

new GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput">allowedReferrersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers">allowedReferrers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedReferrersInput`<sup>Optional</sup> <a name="allowedReferrersInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedReferrersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedReferrers`<sup>Required</sup> <a name="allowedReferrers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers"></a>

```java
public java.util.List<java.lang.String> getAllowedReferrers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue"></a>

```java
public GoogleApikeysKeyRestrictionsBrowserKeyRestrictions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---


### GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference;

new GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput">allowedBundleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds">allowedBundleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedBundleIdsInput`<sup>Optional</sup> <a name="allowedBundleIdsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedBundleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedBundleIds`<sup>Required</sup> <a name="allowedBundleIds" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds"></a>

```java
public java.util.List<java.lang.String> getAllowedBundleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue"></a>

```java
public GoogleApikeysKeyRestrictionsIosKeyRestrictions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a>

---


### GoogleApikeysKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsOutputReference;

new GoogleApikeysKeyRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions">putAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putApiTargets">putApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions">putBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions">putIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions">putServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions">resetAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetApiTargets">resetApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions">resetBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions">resetIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions">resetServerKeyRestrictions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndroidKeyRestrictions` <a name="putAndroidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions"></a>

```java
public void putAndroidKeyRestrictions(GoogleApikeysKeyRestrictionsAndroidKeyRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `putApiTargets` <a name="putApiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putApiTargets"></a>

```java
public void putApiTargets(IResolvable OR java.util.List<GoogleApikeysKeyRestrictionsApiTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putApiTargets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a>>

---

##### `putBrowserKeyRestrictions` <a name="putBrowserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions"></a>

```java
public void putBrowserKeyRestrictions(GoogleApikeysKeyRestrictionsBrowserKeyRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `putIosKeyRestrictions` <a name="putIosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions"></a>

```java
public void putIosKeyRestrictions(GoogleApikeysKeyRestrictionsIosKeyRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `putServerKeyRestrictions` <a name="putServerKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions"></a>

```java
public void putServerKeyRestrictions(GoogleApikeysKeyRestrictionsServerKeyRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `resetAndroidKeyRestrictions` <a name="resetAndroidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions"></a>

```java
public void resetAndroidKeyRestrictions()
```

##### `resetApiTargets` <a name="resetApiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetApiTargets"></a>

```java
public void resetApiTargets()
```

##### `resetBrowserKeyRestrictions` <a name="resetBrowserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions"></a>

```java
public void resetBrowserKeyRestrictions()
```

##### `resetIosKeyRestrictions` <a name="resetIosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions"></a>

```java
public void resetIosKeyRestrictions()
```

##### `resetServerKeyRestrictions` <a name="resetServerKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions"></a>

```java
public void resetServerKeyRestrictions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions">androidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.apiTargets">apiTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList">GoogleApikeysKeyRestrictionsApiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions">browserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions">iosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions">serverKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput">androidKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.apiTargetsInput">apiTargetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput">browserKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput">iosKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput">serverKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `androidKeyRestrictions`<sup>Required</sup> <a name="androidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions"></a>

```java
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference getAndroidKeyRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a>

---

##### `apiTargets`<sup>Required</sup> <a name="apiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.apiTargets"></a>

```java
public GoogleApikeysKeyRestrictionsApiTargetsList getApiTargets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList">GoogleApikeysKeyRestrictionsApiTargetsList</a>

---

##### `browserKeyRestrictions`<sup>Required</sup> <a name="browserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions"></a>

```java
public GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference getBrowserKeyRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a>

---

##### `iosKeyRestrictions`<sup>Required</sup> <a name="iosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions"></a>

```java
public GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference getIosKeyRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a>

---

##### `serverKeyRestrictions`<sup>Required</sup> <a name="serverKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions"></a>

```java
public GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference getServerKeyRestrictions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a>

---

##### `androidKeyRestrictionsInput`<sup>Optional</sup> <a name="androidKeyRestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput"></a>

```java
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictions getAndroidKeyRestrictionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `apiTargetsInput`<sup>Optional</sup> <a name="apiTargetsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.apiTargetsInput"></a>

```java
public java.lang.Object getApiTargetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets">GoogleApikeysKeyRestrictionsApiTargets</a>>

---

##### `browserKeyRestrictionsInput`<sup>Optional</sup> <a name="browserKeyRestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput"></a>

```java
public GoogleApikeysKeyRestrictionsBrowserKeyRestrictions getBrowserKeyRestrictionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `iosKeyRestrictionsInput`<sup>Optional</sup> <a name="iosKeyRestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput"></a>

```java
public GoogleApikeysKeyRestrictionsIosKeyRestrictions getIosKeyRestrictionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `serverKeyRestrictionsInput`<sup>Optional</sup> <a name="serverKeyRestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput"></a>

```java
public GoogleApikeysKeyRestrictionsServerKeyRestrictions getServerKeyRestrictionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.internalValue"></a>

```java
public GoogleApikeysKeyRestrictions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

---


### GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference;

new GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput">allowedIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps">allowedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedIpsInput`<sup>Optional</sup> <a name="allowedIpsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIps`<sup>Required</sup> <a name="allowedIps" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps"></a>

```java
public java.util.List<java.lang.String> getAllowedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue"></a>

```java
public GoogleApikeysKeyRestrictionsServerKeyRestrictions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a>

---


### GoogleApikeysKeyTimeoutsOutputReference <a name="GoogleApikeysKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apikeys_key.GoogleApikeysKeyTimeoutsOutputReference;

new GoogleApikeysKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a>

---



