# `googleKmsEkmConnection` Submodule <a name="`googleKmsEkmConnection` Submodule" id="@cdktf/provider-google-beta.googleKmsEkmConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsEkmConnection <a name="GoogleKmsEkmConnection" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection google_kms_ekm_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnection;

GoogleKmsEkmConnection.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .serviceResolvers(IResolvable)
    .serviceResolvers(java.util.List<GoogleKmsEkmConnectionServiceResolvers>)
//  .cryptoSpacePath(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .keyManagementMode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleKmsEkmConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name for the EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.serviceResolvers">serviceResolvers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>></code> | service_resolvers block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.cryptoSpacePath">cryptoSpacePath</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Optional. Etag of the currently stored EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#id GoogleKmsEkmConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.keyManagementMode">keyManagementMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#project GoogleKmsEkmConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#location GoogleKmsEkmConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name for the EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#name GoogleKmsEkmConnection#name}

---

##### `serviceResolvers`<sup>Required</sup> <a name="serviceResolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.serviceResolvers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>>

service_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#service_resolvers GoogleKmsEkmConnection#service_resolvers}

---

##### `cryptoSpacePath`<sup>Optional</sup> <a name="cryptoSpacePath" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.cryptoSpacePath"></a>

- *Type:* java.lang.String

Optional.

Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#crypto_space_path GoogleKmsEkmConnection#crypto_space_path}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Optional. Etag of the currently stored EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#etag GoogleKmsEkmConnection#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#id GoogleKmsEkmConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyManagementMode`<sup>Optional</sup> <a name="keyManagementMode" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.keyManagementMode"></a>

- *Type:* java.lang.String

Optional.

Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#key_management_mode GoogleKmsEkmConnection#key_management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#project GoogleKmsEkmConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#timeouts GoogleKmsEkmConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putServiceResolvers">putServiceResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetCryptoSpacePath">resetCryptoSpacePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetKeyManagementMode">resetKeyManagementMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServiceResolvers` <a name="putServiceResolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putServiceResolvers"></a>

```java
public void putServiceResolvers(IResolvable OR java.util.List<GoogleKmsEkmConnectionServiceResolvers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putServiceResolvers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putTimeouts"></a>

```java
public void putTimeouts(GoogleKmsEkmConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>

---

##### `resetCryptoSpacePath` <a name="resetCryptoSpacePath" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetCryptoSpacePath"></a>

```java
public void resetCryptoSpacePath()
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetId"></a>

```java
public void resetId()
```

##### `resetKeyManagementMode` <a name="resetKeyManagementMode" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetKeyManagementMode"></a>

```java
public void resetKeyManagementMode()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsEkmConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnection;

GoogleKmsEkmConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnection;

GoogleKmsEkmConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnection;

GoogleKmsEkmConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnection;

GoogleKmsEkmConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleKmsEkmConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleKmsEkmConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleKmsEkmConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleKmsEkmConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsEkmConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.serviceResolvers">serviceResolvers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList">GoogleKmsEkmConnectionServiceResolversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference">GoogleKmsEkmConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cryptoSpacePathInput">cryptoSpacePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.keyManagementModeInput">keyManagementModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.serviceResolversInput">serviceResolversInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cryptoSpacePath">cryptoSpacePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.keyManagementMode">keyManagementMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `serviceResolvers`<sup>Required</sup> <a name="serviceResolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.serviceResolvers"></a>

```java
public GoogleKmsEkmConnectionServiceResolversList getServiceResolvers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList">GoogleKmsEkmConnectionServiceResolversList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.timeouts"></a>

```java
public GoogleKmsEkmConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference">GoogleKmsEkmConnectionTimeoutsOutputReference</a>

---

##### `cryptoSpacePathInput`<sup>Optional</sup> <a name="cryptoSpacePathInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cryptoSpacePathInput"></a>

```java
public java.lang.String getCryptoSpacePathInput();
```

- *Type:* java.lang.String

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyManagementModeInput`<sup>Optional</sup> <a name="keyManagementModeInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.keyManagementModeInput"></a>

```java
public java.lang.String getKeyManagementModeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceResolversInput`<sup>Optional</sup> <a name="serviceResolversInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.serviceResolversInput"></a>

```java
public java.lang.Object getServiceResolversInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>

---

##### `cryptoSpacePath`<sup>Required</sup> <a name="cryptoSpacePath" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cryptoSpacePath"></a>

```java
public java.lang.String getCryptoSpacePath();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyManagementMode`<sup>Required</sup> <a name="keyManagementMode" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.keyManagementMode"></a>

```java
public java.lang.String getKeyManagementMode();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsEkmConnectionConfig <a name="GoogleKmsEkmConnectionConfig" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionConfig;

GoogleKmsEkmConnectionConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .serviceResolvers(IResolvable)
    .serviceResolvers(java.util.List<GoogleKmsEkmConnectionServiceResolvers>)
//  .cryptoSpacePath(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .keyManagementMode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleKmsEkmConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name for the EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.serviceResolvers">serviceResolvers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>></code> | service_resolvers block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.cryptoSpacePath">cryptoSpacePath</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Optional. Etag of the currently stored EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#id GoogleKmsEkmConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.keyManagementMode">keyManagementMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#project GoogleKmsEkmConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#location GoogleKmsEkmConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name for the EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#name GoogleKmsEkmConnection#name}

---

##### `serviceResolvers`<sup>Required</sup> <a name="serviceResolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.serviceResolvers"></a>

```java
public java.lang.Object getServiceResolvers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>>

service_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#service_resolvers GoogleKmsEkmConnection#service_resolvers}

---

##### `cryptoSpacePath`<sup>Optional</sup> <a name="cryptoSpacePath" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.cryptoSpacePath"></a>

```java
public java.lang.String getCryptoSpacePath();
```

- *Type:* java.lang.String

Optional.

Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#crypto_space_path GoogleKmsEkmConnection#crypto_space_path}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Optional. Etag of the currently stored EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#etag GoogleKmsEkmConnection#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#id GoogleKmsEkmConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyManagementMode`<sup>Optional</sup> <a name="keyManagementMode" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.keyManagementMode"></a>

```java
public java.lang.String getKeyManagementMode();
```

- *Type:* java.lang.String

Optional.

Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#key_management_mode GoogleKmsEkmConnection#key_management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#project GoogleKmsEkmConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.timeouts"></a>

```java
public GoogleKmsEkmConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#timeouts GoogleKmsEkmConnection#timeouts}

---

### GoogleKmsEkmConnectionServiceResolvers <a name="GoogleKmsEkmConnectionServiceResolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionServiceResolvers;

GoogleKmsEkmConnectionServiceResolvers.builder()
    .hostname(java.lang.String)
    .serverCertificates(IResolvable)
    .serverCertificates(java.util.List<GoogleKmsEkmConnectionServiceResolversServerCertificates>)
    .serviceDirectoryService(java.lang.String)
//  .endpointFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Required. The hostname of the EKM replica used at TLS and HTTP layers. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.serverCertificates">serverCertificates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>></code> | server_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.serviceDirectoryService">serviceDirectoryService</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.endpointFilter">endpointFilter</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Required. The hostname of the EKM replica used at TLS and HTTP layers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#hostname GoogleKmsEkmConnection#hostname}

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.serverCertificates"></a>

```java
public java.lang.Object getServerCertificates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>>

server_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#server_certificates GoogleKmsEkmConnection#server_certificates}

---

##### `serviceDirectoryService`<sup>Required</sup> <a name="serviceDirectoryService" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.serviceDirectoryService"></a>

```java
public java.lang.String getServiceDirectoryService();
```

- *Type:* java.lang.String

Required.

The resource name of the Service Directory service pointing to an EKM replica, in the format projects/* /locations/* /namespaces/* /services/*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#service_directory_service GoogleKmsEkmConnection#service_directory_service}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `endpointFilter`<sup>Optional</sup> <a name="endpointFilter" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.endpointFilter"></a>

```java
public java.lang.String getEndpointFilter();
```

- *Type:* java.lang.String

Optional.

The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#endpoint_filter GoogleKmsEkmConnection#endpoint_filter}

---

### GoogleKmsEkmConnectionServiceResolversServerCertificates <a name="GoogleKmsEkmConnectionServiceResolversServerCertificates" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionServiceResolversServerCertificates;

GoogleKmsEkmConnectionServiceResolversServerCertificates.builder()
    .rawDer(java.lang.String)
//  .subjectAlternativeDnsNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.property.rawDer">rawDer</a></code> | <code>java.lang.String</code> | Required. The raw certificate bytes in DER format. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | Output only. The subject Alternative DNS names. Only present if parsed is true. |

---

##### `rawDer`<sup>Required</sup> <a name="rawDer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.property.rawDer"></a>

```java
public java.lang.String getRawDer();
```

- *Type:* java.lang.String

Required. The raw certificate bytes in DER format. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#raw_der GoogleKmsEkmConnection#raw_der}

---

##### `subjectAlternativeDnsNames`<sup>Optional</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeDnsNames();
```

- *Type:* java.util.List<java.lang.String>

Output only. The subject Alternative DNS names. Only present if parsed is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#subject_alternative_dns_names GoogleKmsEkmConnection#subject_alternative_dns_names}

---

### GoogleKmsEkmConnectionTimeouts <a name="GoogleKmsEkmConnectionTimeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionTimeouts;

GoogleKmsEkmConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#create GoogleKmsEkmConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#delete GoogleKmsEkmConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#update GoogleKmsEkmConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#create GoogleKmsEkmConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#delete GoogleKmsEkmConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_kms_ekm_connection#update GoogleKmsEkmConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsEkmConnectionServiceResolversList <a name="GoogleKmsEkmConnectionServiceResolversList" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionServiceResolversList;

new GoogleKmsEkmConnectionServiceResolversList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.get"></a>

```java
public GoogleKmsEkmConnectionServiceResolversOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>>

---


### GoogleKmsEkmConnectionServiceResolversOutputReference <a name="GoogleKmsEkmConnectionServiceResolversOutputReference" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionServiceResolversOutputReference;

new GoogleKmsEkmConnectionServiceResolversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.putServerCertificates">putServerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter">resetEndpointFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerCertificates` <a name="putServerCertificates" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.putServerCertificates"></a>

```java
public void putServerCertificates(IResolvable OR java.util.List<GoogleKmsEkmConnectionServiceResolversServerCertificates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.putServerCertificates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>>

---

##### `resetEndpointFilter` <a name="resetEndpointFilter" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter"></a>

```java
public void resetEndpointFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serverCertificates">serverCertificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList">GoogleKmsEkmConnectionServiceResolversServerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput">endpointFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput">serverCertificatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput">serviceDirectoryServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.endpointFilter">endpointFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService">serviceDirectoryService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serverCertificates"></a>

```java
public GoogleKmsEkmConnectionServiceResolversServerCertificatesList getServerCertificates();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList">GoogleKmsEkmConnectionServiceResolversServerCertificatesList</a>

---

##### `endpointFilterInput`<sup>Optional</sup> <a name="endpointFilterInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput"></a>

```java
public java.lang.String getEndpointFilterInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `serverCertificatesInput`<sup>Optional</sup> <a name="serverCertificatesInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput"></a>

```java
public java.lang.Object getServerCertificatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>>

---

##### `serviceDirectoryServiceInput`<sup>Optional</sup> <a name="serviceDirectoryServiceInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput"></a>

```java
public java.lang.String getServiceDirectoryServiceInput();
```

- *Type:* java.lang.String

---

##### `endpointFilter`<sup>Required</sup> <a name="endpointFilter" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.endpointFilter"></a>

```java
public java.lang.String getEndpointFilter();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryService`<sup>Required</sup> <a name="serviceDirectoryService" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService"></a>

```java
public java.lang.String getServiceDirectoryService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>

---


### GoogleKmsEkmConnectionServiceResolversServerCertificatesList <a name="GoogleKmsEkmConnectionServiceResolversServerCertificatesList" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList;

new GoogleKmsEkmConnectionServiceResolversServerCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.get"></a>

```java
public GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>>

---


### GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference <a name="GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference;

new GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames">resetSubjectAlternativeDnsNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubjectAlternativeDnsNames` <a name="resetSubjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames"></a>

```java
public void resetSubjectAlternativeDnsNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime">notAfterTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime">notBeforeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed">parsed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint">sha256Fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput">rawDerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput">subjectAlternativeDnsNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer">rawDer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `notAfterTime`<sup>Required</sup> <a name="notAfterTime" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime"></a>

```java
public java.lang.String getNotAfterTime();
```

- *Type:* java.lang.String

---

##### `notBeforeTime`<sup>Required</sup> <a name="notBeforeTime" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime"></a>

```java
public java.lang.String getNotBeforeTime();
```

- *Type:* java.lang.String

---

##### `parsed`<sup>Required</sup> <a name="parsed" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed"></a>

```java
public IResolvable getParsed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `sha256Fingerprint`<sup>Required</sup> <a name="sha256Fingerprint" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint"></a>

```java
public java.lang.String getSha256Fingerprint();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `rawDerInput`<sup>Optional</sup> <a name="rawDerInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput"></a>

```java
public java.lang.String getRawDerInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeDnsNamesInput`<sup>Optional</sup> <a name="subjectAlternativeDnsNamesInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeDnsNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rawDer`<sup>Required</sup> <a name="rawDer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer"></a>

```java
public java.lang.String getRawDer();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeDnsNames`<sup>Required</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>

---


### GoogleKmsEkmConnectionTimeoutsOutputReference <a name="GoogleKmsEkmConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_ekm_connection.GoogleKmsEkmConnectionTimeoutsOutputReference;

new GoogleKmsEkmConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>

---



