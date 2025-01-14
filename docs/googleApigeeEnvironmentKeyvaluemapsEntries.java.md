# `googleApigeeEnvironmentKeyvaluemapsEntries` Submodule <a name="`googleApigeeEnvironmentKeyvaluemapsEntries` Submodule" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntries <a name="GoogleApigeeEnvironmentKeyvaluemapsEntries" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries google_apigee_environment_keyvaluemaps_entries}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps_entries.GoogleApigeeEnvironmentKeyvaluemapsEntries;

GoogleApigeeEnvironmentKeyvaluemapsEntries.Builder.create(Construct scope, java.lang.String id)
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
    .envKeyvaluemapId(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.envKeyvaluemapId">envKeyvaluemapId</a></code> | <code>java.lang.String</code> | The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Required. Resource URI that can be used to identify the scope of the key value map entries. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Required. Data or payload that is being retrieved and associated with the unique key. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envKeyvaluemapId`<sup>Required</sup> <a name="envKeyvaluemapId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.envKeyvaluemapId"></a>

- *Type:* java.lang.String

The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#env_keyvaluemap_id GoogleApigeeEnvironmentKeyvaluemapsEntries#env_keyvaluemap_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Required. Resource URI that can be used to identify the scope of the key value map entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#name GoogleApigeeEnvironmentKeyvaluemapsEntries#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Required. Data or payload that is being retrieved and associated with the unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#value GoogleApigeeEnvironmentKeyvaluemapsEntries#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#timeouts GoogleApigeeEnvironmentKeyvaluemapsEntries#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps_entries.GoogleApigeeEnvironmentKeyvaluemapsEntries;

GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps_entries.GoogleApigeeEnvironmentKeyvaluemapsEntries;

GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps_entries.GoogleApigeeEnvironmentKeyvaluemapsEntries;

GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps_entries.GoogleApigeeEnvironmentKeyvaluemapsEntries;

GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeEnvironmentKeyvaluemapsEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeEnvironmentKeyvaluemapsEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentKeyvaluemapsEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapIdInput">envKeyvaluemapIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapId">envKeyvaluemapId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeouts"></a>

```java
public GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference</a>

---

##### `envKeyvaluemapIdInput`<sup>Optional</sup> <a name="envKeyvaluemapIdInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapIdInput"></a>

```java
public java.lang.String getEnvKeyvaluemapIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `envKeyvaluemapId`<sup>Required</sup> <a name="envKeyvaluemapId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapId"></a>

```java
public java.lang.String getEnvKeyvaluemapId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps_entries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig;

GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.builder()
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
    .envKeyvaluemapId(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.envKeyvaluemapId">envKeyvaluemapId</a></code> | <code>java.lang.String</code> | The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Required. Resource URI that can be used to identify the scope of the key value map entries. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.value">value</a></code> | <code>java.lang.String</code> | Required. Data or payload that is being retrieved and associated with the unique key. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envKeyvaluemapId`<sup>Required</sup> <a name="envKeyvaluemapId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.envKeyvaluemapId"></a>

```java
public java.lang.String getEnvKeyvaluemapId();
```

- *Type:* java.lang.String

The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#env_keyvaluemap_id GoogleApigeeEnvironmentKeyvaluemapsEntries#env_keyvaluemap_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. Resource URI that can be used to identify the scope of the key value map entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#name GoogleApigeeEnvironmentKeyvaluemapsEntries#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Required. Data or payload that is being retrieved and associated with the unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#value GoogleApigeeEnvironmentKeyvaluemapsEntries#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.timeouts"></a>

```java
public GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#timeouts GoogleApigeeEnvironmentKeyvaluemapsEntries#timeouts}

---

### GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps_entries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts;

GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#create GoogleApigeeEnvironmentKeyvaluemapsEntries#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#delete GoogleApigeeEnvironmentKeyvaluemapsEntries#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#create GoogleApigeeEnvironmentKeyvaluemapsEntries#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#delete GoogleApigeeEnvironmentKeyvaluemapsEntries#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_environment_keyvaluemaps_entries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference;

new GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

---



