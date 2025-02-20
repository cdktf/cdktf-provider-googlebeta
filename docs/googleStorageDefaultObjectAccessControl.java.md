# `googleStorageDefaultObjectAccessControl` Submodule <a name="`googleStorageDefaultObjectAccessControl` Submodule" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageDefaultObjectAccessControl <a name="GoogleStorageDefaultObjectAccessControl" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control google_storage_default_object_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControl;

GoogleStorageDefaultObjectAccessControl.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .entity(java.lang.String)
    .role(java.lang.String)
//  .id(java.lang.String)
//  .object(java.lang.String)
//  .timeouts(GoogleStorageDefaultObjectAccessControlTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.entity">entity</a></code> | <code>java.lang.String</code> | The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#id GoogleStorageDefaultObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.object">object</a></code> | <code>java.lang.String</code> | The name of the object, if applied to an object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#bucket GoogleStorageDefaultObjectAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.entity"></a>

- *Type:* java.lang.String

The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#entity GoogleStorageDefaultObjectAccessControl#entity}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#role GoogleStorageDefaultObjectAccessControl#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#id GoogleStorageDefaultObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.object"></a>

- *Type:* java.lang.String

The name of the object, if applied to an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#object GoogleStorageDefaultObjectAccessControl#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#timeouts GoogleStorageDefaultObjectAccessControl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.putTimeouts"></a>

```java
public void putTimeouts(GoogleStorageDefaultObjectAccessControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetId"></a>

```java
public void resetId()
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetObject"></a>

```java
public void resetObject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageDefaultObjectAccessControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControl;

GoogleStorageDefaultObjectAccessControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControl;

GoogleStorageDefaultObjectAccessControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControl;

GoogleStorageDefaultObjectAccessControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControl;

GoogleStorageDefaultObjectAccessControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleStorageDefaultObjectAccessControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleStorageDefaultObjectAccessControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleStorageDefaultObjectAccessControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleStorageDefaultObjectAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageDefaultObjectAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.projectTeam">projectTeam</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList">GoogleStorageDefaultObjectAccessControlProjectTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference">GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entityInput">entityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entity">entity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `projectTeam`<sup>Required</sup> <a name="projectTeam" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.projectTeam"></a>

```java
public GoogleStorageDefaultObjectAccessControlProjectTeamList getProjectTeam();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList">GoogleStorageDefaultObjectAccessControlProjectTeamList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.timeouts"></a>

```java
public GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference">GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `entityInput`<sup>Optional</sup> <a name="entityInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entityInput"></a>

```java
public java.lang.String getEntityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entity"></a>

```java
public java.lang.String getEntity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageDefaultObjectAccessControlConfig <a name="GoogleStorageDefaultObjectAccessControlConfig" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControlConfig;

GoogleStorageDefaultObjectAccessControlConfig.builder()
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
    .bucket(java.lang.String)
    .entity(java.lang.String)
    .role(java.lang.String)
//  .id(java.lang.String)
//  .object(java.lang.String)
//  .timeouts(GoogleStorageDefaultObjectAccessControlTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.entity">entity</a></code> | <code>java.lang.String</code> | The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.role">role</a></code> | <code>java.lang.String</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#id GoogleStorageDefaultObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.object">object</a></code> | <code>java.lang.String</code> | The name of the object, if applied to an object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#bucket GoogleStorageDefaultObjectAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.entity"></a>

```java
public java.lang.String getEntity();
```

- *Type:* java.lang.String

The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#entity GoogleStorageDefaultObjectAccessControl#entity}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#role GoogleStorageDefaultObjectAccessControl#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#id GoogleStorageDefaultObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

The name of the object, if applied to an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#object GoogleStorageDefaultObjectAccessControl#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.timeouts"></a>

```java
public GoogleStorageDefaultObjectAccessControlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#timeouts GoogleStorageDefaultObjectAccessControl#timeouts}

---

### GoogleStorageDefaultObjectAccessControlProjectTeam <a name="GoogleStorageDefaultObjectAccessControlProjectTeam" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControlProjectTeam;

GoogleStorageDefaultObjectAccessControlProjectTeam.builder()
    .build();
```


### GoogleStorageDefaultObjectAccessControlTimeouts <a name="GoogleStorageDefaultObjectAccessControlTimeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControlTimeouts;

GoogleStorageDefaultObjectAccessControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#create GoogleStorageDefaultObjectAccessControl#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#delete GoogleStorageDefaultObjectAccessControl#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#update GoogleStorageDefaultObjectAccessControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#create GoogleStorageDefaultObjectAccessControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#delete GoogleStorageDefaultObjectAccessControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_storage_default_object_access_control#update GoogleStorageDefaultObjectAccessControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageDefaultObjectAccessControlProjectTeamList <a name="GoogleStorageDefaultObjectAccessControlProjectTeamList" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControlProjectTeamList;

new GoogleStorageDefaultObjectAccessControlProjectTeamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.get"></a>

```java
public GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference <a name="GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference;

new GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.team">team</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam">GoogleStorageDefaultObjectAccessControlProjectTeam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber"></a>

```java
public java.lang.String getProjectNumber();
```

- *Type:* java.lang.String

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue"></a>

```java
public GoogleStorageDefaultObjectAccessControlProjectTeam getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam">GoogleStorageDefaultObjectAccessControlProjectTeam</a>

---


### GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference <a name="GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_default_object_access_control.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference;

new GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>

---



