# `googleSecureSourceManagerInstance` Submodule <a name="`googleSecureSourceManagerInstance` Submodule" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerInstance <a name="GoogleSecureSourceManagerInstance" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance google_secure_source_manager_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstance;

GoogleSecureSourceManagerInstance.Builder.create(Construct scope, java.lang.String id)
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
    .instanceId(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .privateConfig(GoogleSecureSourceManagerInstancePrivateConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleSecureSourceManagerInstanceTimeouts)
//  .workforceIdentityFederationConfig(GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.privateConfig">privateConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | private_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.workforceIdentityFederationConfig">workforceIdentityFederationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | workforce_identity_federation_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#instance_id GoogleSecureSourceManagerInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#location GoogleSecureSourceManagerInstance#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#kms_key GoogleSecureSourceManagerInstance#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#labels GoogleSecureSourceManagerInstance#labels}

---

##### `privateConfig`<sup>Optional</sup> <a name="privateConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.privateConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

private_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#private_config GoogleSecureSourceManagerInstance#private_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#timeouts GoogleSecureSourceManagerInstance#timeouts}

---

##### `workforceIdentityFederationConfig`<sup>Optional</sup> <a name="workforceIdentityFederationConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.workforceIdentityFederationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

workforce_identity_federation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#workforce_identity_federation_config GoogleSecureSourceManagerInstance#workforce_identity_federation_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig">putPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig">putWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetPrivateConfig">resetPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetWorkforceIdentityFederationConfig">resetWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrivateConfig` <a name="putPrivateConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig"></a>

```java
public void putPrivateConfig(GoogleSecureSourceManagerInstancePrivateConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts"></a>

```java
public void putTimeouts(GoogleSecureSourceManagerInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

---

##### `putWorkforceIdentityFederationConfig` <a name="putWorkforceIdentityFederationConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig"></a>

```java
public void putWorkforceIdentityFederationConfig(GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPrivateConfig` <a name="resetPrivateConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetPrivateConfig"></a>

```java
public void resetPrivateConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkforceIdentityFederationConfig` <a name="resetWorkforceIdentityFederationConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetWorkforceIdentityFederationConfig"></a>

```java
public void resetWorkforceIdentityFederationConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecureSourceManagerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstance;

GoogleSecureSourceManagerInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstance;

GoogleSecureSourceManagerInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstance;

GoogleSecureSourceManagerInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstance;

GoogleSecureSourceManagerInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSecureSourceManagerInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSecureSourceManagerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSecureSourceManagerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSecureSourceManagerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList">GoogleSecureSourceManagerInstanceHostConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfig">privateConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference">GoogleSecureSourceManagerInstancePrivateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.stateNote">stateNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference">GoogleSecureSourceManagerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfig">workforceIdentityFederationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfigInput">privateConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfigInput">workforceIdentityFederationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hostConfig`<sup>Required</sup> <a name="hostConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.hostConfig"></a>

```java
public GoogleSecureSourceManagerInstanceHostConfigList getHostConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList">GoogleSecureSourceManagerInstanceHostConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateConfig`<sup>Required</sup> <a name="privateConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfig"></a>

```java
public GoogleSecureSourceManagerInstancePrivateConfigOutputReference getPrivateConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference">GoogleSecureSourceManagerInstancePrivateConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateNote`<sup>Required</sup> <a name="stateNote" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.stateNote"></a>

```java
public java.lang.String getStateNote();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeouts"></a>

```java
public GoogleSecureSourceManagerInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference">GoogleSecureSourceManagerInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workforceIdentityFederationConfig`<sup>Required</sup> <a name="workforceIdentityFederationConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfig"></a>

```java
public GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference getWorkforceIdentityFederationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `privateConfigInput`<sup>Optional</sup> <a name="privateConfigInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfigInput"></a>

```java
public GoogleSecureSourceManagerInstancePrivateConfig getPrivateConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

---

##### `workforceIdentityFederationConfigInput`<sup>Optional</sup> <a name="workforceIdentityFederationConfigInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfigInput"></a>

```java
public GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig getWorkforceIdentityFederationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerInstanceConfig <a name="GoogleSecureSourceManagerInstanceConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstanceConfig;

GoogleSecureSourceManagerInstanceConfig.builder()
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
    .instanceId(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .privateConfig(GoogleSecureSourceManagerInstancePrivateConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleSecureSourceManagerInstanceTimeouts)
//  .workforceIdentityFederationConfig(GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.privateConfig">privateConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | private_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig">workforceIdentityFederationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | workforce_identity_federation_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#instance_id GoogleSecureSourceManagerInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#location GoogleSecureSourceManagerInstance#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#kms_key GoogleSecureSourceManagerInstance#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#labels GoogleSecureSourceManagerInstance#labels}

---

##### `privateConfig`<sup>Optional</sup> <a name="privateConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.privateConfig"></a>

```java
public GoogleSecureSourceManagerInstancePrivateConfig getPrivateConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

private_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#private_config GoogleSecureSourceManagerInstance#private_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.timeouts"></a>

```java
public GoogleSecureSourceManagerInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#timeouts GoogleSecureSourceManagerInstance#timeouts}

---

##### `workforceIdentityFederationConfig`<sup>Optional</sup> <a name="workforceIdentityFederationConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig"></a>

```java
public GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig getWorkforceIdentityFederationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

workforce_identity_federation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#workforce_identity_federation_config GoogleSecureSourceManagerInstance#workforce_identity_federation_config}

---

### GoogleSecureSourceManagerInstanceHostConfig <a name="GoogleSecureSourceManagerInstanceHostConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstanceHostConfig;

GoogleSecureSourceManagerInstanceHostConfig.builder()
    .build();
```


### GoogleSecureSourceManagerInstancePrivateConfig <a name="GoogleSecureSourceManagerInstancePrivateConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstancePrivateConfig;

GoogleSecureSourceManagerInstancePrivateConfig.builder()
    .caPool(java.lang.String)
    .isPrivate(java.lang.Boolean)
    .isPrivate(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.caPool">caPool</a></code> | <code>java.lang.String</code> | CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | 'Indicate if it's private instance.'. |

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#ca_pool GoogleSecureSourceManagerInstance#ca_pool}

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

'Indicate if it's private instance.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#is_private GoogleSecureSourceManagerInstance#is_private}

---

### GoogleSecureSourceManagerInstanceTimeouts <a name="GoogleSecureSourceManagerInstanceTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstanceTimeouts;

GoogleSecureSourceManagerInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#create GoogleSecureSourceManagerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#delete GoogleSecureSourceManagerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#update GoogleSecureSourceManagerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#create GoogleSecureSourceManagerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#delete GoogleSecureSourceManagerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#update GoogleSecureSourceManagerInstance#update}.

---

### GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig <a name="GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig;

GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | 'Whether Workforce Identity Federation is enabled.'. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

'Whether Workforce Identity Federation is enabled.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_secure_source_manager_instance#enabled GoogleSecureSourceManagerInstance#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerInstanceHostConfigList <a name="GoogleSecureSourceManagerInstanceHostConfigList" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstanceHostConfigList;

new GoogleSecureSourceManagerInstanceHostConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get"></a>

```java
public GoogleSecureSourceManagerInstanceHostConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleSecureSourceManagerInstanceHostConfigOutputReference <a name="GoogleSecureSourceManagerInstanceHostConfigOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstanceHostConfigOutputReference;

new GoogleSecureSourceManagerInstanceHostConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp">gitHttp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh">gitSsh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.html">html</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig">GoogleSecureSourceManagerInstanceHostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `gitHttp`<sup>Required</sup> <a name="gitHttp" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp"></a>

```java
public java.lang.String getGitHttp();
```

- *Type:* java.lang.String

---

##### `gitSsh`<sup>Required</sup> <a name="gitSsh" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh"></a>

```java
public java.lang.String getGitSsh();
```

- *Type:* java.lang.String

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.html"></a>

```java
public java.lang.String getHtml();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.internalValue"></a>

```java
public GoogleSecureSourceManagerInstanceHostConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig">GoogleSecureSourceManagerInstanceHostConfig</a>

---


### GoogleSecureSourceManagerInstancePrivateConfigOutputReference <a name="GoogleSecureSourceManagerInstancePrivateConfigOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference;

new GoogleSecureSourceManagerInstancePrivateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment">httpServiceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment">sshServiceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput">caPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput">isPrivateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPool">caPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpServiceAttachment`<sup>Required</sup> <a name="httpServiceAttachment" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment"></a>

```java
public java.lang.String getHttpServiceAttachment();
```

- *Type:* java.lang.String

---

##### `sshServiceAttachment`<sup>Required</sup> <a name="sshServiceAttachment" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment"></a>

```java
public java.lang.String getSshServiceAttachment();
```

- *Type:* java.lang.String

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput"></a>

```java
public java.lang.String getCaPoolInput();
```

- *Type:* java.lang.String

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput"></a>

```java
public java.lang.Object getIsPrivateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue"></a>

```java
public GoogleSecureSourceManagerInstancePrivateConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

---


### GoogleSecureSourceManagerInstanceTimeoutsOutputReference <a name="GoogleSecureSourceManagerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference;

new GoogleSecureSourceManagerInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

---


### GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference <a name="GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_instance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference;

new GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue"></a>

```java
public GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---



