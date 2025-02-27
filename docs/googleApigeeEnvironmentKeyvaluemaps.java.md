# `googleApigeeEnvironmentKeyvaluemaps` Submodule <a name="`googleApigeeEnvironmentKeyvaluemaps` Submodule" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentKeyvaluemaps <a name="GoogleApigeeEnvironmentKeyvaluemaps" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps google_apigee_environment_keyvaluemaps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps;

GoogleApigeeEnvironmentKeyvaluemaps.Builder.create(Construct scope, java.lang.String id)
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
    .envId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleApigeeEnvironmentKeyvaluemapsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Required. ID of the key value map. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#id GoogleApigeeEnvironmentKeyvaluemaps#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.envId"></a>

- *Type:* java.lang.String

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#env_id GoogleApigeeEnvironmentKeyvaluemaps#env_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Required. ID of the key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#name GoogleApigeeEnvironmentKeyvaluemaps#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#id GoogleApigeeEnvironmentKeyvaluemaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#timeouts GoogleApigeeEnvironmentKeyvaluemaps#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeEnvironmentKeyvaluemapsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeEnvironmentKeyvaluemaps resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps;

GoogleApigeeEnvironmentKeyvaluemaps.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps;

GoogleApigeeEnvironmentKeyvaluemaps.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps;

GoogleApigeeEnvironmentKeyvaluemaps.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps;

GoogleApigeeEnvironmentKeyvaluemaps.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeEnvironmentKeyvaluemaps.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApigeeEnvironmentKeyvaluemaps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeEnvironmentKeyvaluemaps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeEnvironmentKeyvaluemaps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentKeyvaluemaps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference">GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.envIdInput">envIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.envId">envId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.timeouts"></a>

```java
public GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference">GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference</a>

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.envIdInput"></a>

```java
public java.lang.String getEnvIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemaps.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentKeyvaluemapsConfig <a name="GoogleApigeeEnvironmentKeyvaluemapsConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig;

GoogleApigeeEnvironmentKeyvaluemapsConfig.builder()
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
    .envId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleApigeeEnvironmentKeyvaluemapsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Required. ID of the key value map. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#id GoogleApigeeEnvironmentKeyvaluemaps#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#env_id GoogleApigeeEnvironmentKeyvaluemaps#env_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. ID of the key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#name GoogleApigeeEnvironmentKeyvaluemaps#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#id GoogleApigeeEnvironmentKeyvaluemaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsConfig.property.timeouts"></a>

```java
public GoogleApigeeEnvironmentKeyvaluemapsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#timeouts GoogleApigeeEnvironmentKeyvaluemaps#timeouts}

---

### GoogleApigeeEnvironmentKeyvaluemapsTimeouts <a name="GoogleApigeeEnvironmentKeyvaluemapsTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts;

GoogleApigeeEnvironmentKeyvaluemapsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#create GoogleApigeeEnvironmentKeyvaluemaps#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#delete GoogleApigeeEnvironmentKeyvaluemaps#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#create GoogleApigeeEnvironmentKeyvaluemaps#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps#delete GoogleApigeeEnvironmentKeyvaluemaps#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference <a name="GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference;

new GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemaps.GoogleApigeeEnvironmentKeyvaluemapsTimeouts">GoogleApigeeEnvironmentKeyvaluemapsTimeouts</a>

---



