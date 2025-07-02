# `googleIamWorkforcePoolProviderKey` Submodule <a name="`googleIamWorkforcePoolProviderKey` Submodule" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProviderKey <a name="GoogleIamWorkforcePoolProviderKey" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key google_iam_workforce_pool_provider_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKey;

GoogleIamWorkforcePoolProviderKey.Builder.create(Construct scope, java.lang.String id)
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
    .keyData(GoogleIamWorkforcePoolProviderKeyKeyData)
    .keyId(java.lang.String)
    .location(java.lang.String)
    .providerId(java.lang.String)
    .use(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleIamWorkforcePoolProviderKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | key_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | The ID to use for the key, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID of the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.use">use</a></code> | <code>java.lang.String</code> | The purpose of the key. Possible values: ["ENCRYPTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID of the workforce pool. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#id GoogleIamWorkforcePoolProviderKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.keyData"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

key_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#key_data GoogleIamWorkforcePoolProviderKey#key_data}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

The ID to use for the key, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#key_id GoogleIamWorkforcePoolProviderKey#key_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#location GoogleIamWorkforcePoolProviderKey#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.providerId"></a>

- *Type:* java.lang.String

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#provider_id GoogleIamWorkforcePoolProviderKey#provider_id}

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.use"></a>

- *Type:* java.lang.String

The purpose of the key. Possible values: ["ENCRYPTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#use GoogleIamWorkforcePoolProviderKey#use}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.workforcePoolId"></a>

- *Type:* java.lang.String

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#workforce_pool_id GoogleIamWorkforcePoolProviderKey#workforce_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#id GoogleIamWorkforcePoolProviderKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#timeouts GoogleIamWorkforcePoolProviderKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData">putKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyData` <a name="putKeyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData"></a>

```java
public void putKeyData(GoogleIamWorkforcePoolProviderKeyKeyData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts"></a>

```java
public void putTimeouts(GoogleIamWorkforcePoolProviderKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKey;

GoogleIamWorkforcePoolProviderKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKey;

GoogleIamWorkforcePoolProviderKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKey;

GoogleIamWorkforcePoolProviderKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKey;

GoogleIamWorkforcePoolProviderKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIamWorkforcePoolProviderKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIamWorkforcePoolProviderKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIamWorkforcePoolProviderKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProviderKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference">GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference">GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyDataInput">keyDataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerIdInput">providerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.useInput">useInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.use">use</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyData"></a>

```java
public GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference getKeyData();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference">GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeouts"></a>

```java
public GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference">GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyDataInput`<sup>Optional</sup> <a name="keyDataInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyDataInput"></a>

```java
public GoogleIamWorkforcePoolProviderKeyKeyData getKeyDataInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerIdInput"></a>

```java
public java.lang.String getProviderIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

---

##### `useInput`<sup>Optional</sup> <a name="useInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.useInput"></a>

```java
public java.lang.String getUseInput();
```

- *Type:* java.lang.String

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolIdInput"></a>

```java
public java.lang.String getWorkforcePoolIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.use"></a>

```java
public java.lang.String getUse();
```

- *Type:* java.lang.String

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderKeyConfig <a name="GoogleIamWorkforcePoolProviderKeyConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKeyConfig;

GoogleIamWorkforcePoolProviderKeyConfig.builder()
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
    .keyData(GoogleIamWorkforcePoolProviderKeyKeyData)
    .keyId(java.lang.String)
    .location(java.lang.String)
    .providerId(java.lang.String)
    .use(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleIamWorkforcePoolProviderKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | key_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ID to use for the key, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID of the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.use">use</a></code> | <code>java.lang.String</code> | The purpose of the key. Possible values: ["ENCRYPTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID of the workforce pool. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#id GoogleIamWorkforcePoolProviderKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyData"></a>

```java
public GoogleIamWorkforcePoolProviderKeyKeyData getKeyData();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

key_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#key_data GoogleIamWorkforcePoolProviderKey#key_data}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ID to use for the key, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#key_id GoogleIamWorkforcePoolProviderKey#key_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#location GoogleIamWorkforcePoolProviderKey#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#provider_id GoogleIamWorkforcePoolProviderKey#provider_id}

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.use"></a>

```java
public java.lang.String getUse();
```

- *Type:* java.lang.String

The purpose of the key. Possible values: ["ENCRYPTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#use GoogleIamWorkforcePoolProviderKey#use}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#workforce_pool_id GoogleIamWorkforcePoolProviderKey#workforce_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#id GoogleIamWorkforcePoolProviderKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.timeouts"></a>

```java
public GoogleIamWorkforcePoolProviderKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#timeouts GoogleIamWorkforcePoolProviderKey#timeouts}

---

### GoogleIamWorkforcePoolProviderKeyKeyData <a name="GoogleIamWorkforcePoolProviderKeyKeyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKeyKeyData;

GoogleIamWorkforcePoolProviderKeyKeyData.builder()
    .keySpec(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.property.keySpec">keySpec</a></code> | <code>java.lang.String</code> | The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"]. |

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.property.keySpec"></a>

```java
public java.lang.String getKeySpec();
```

- *Type:* java.lang.String

The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#key_spec GoogleIamWorkforcePoolProviderKey#key_spec}

---

### GoogleIamWorkforcePoolProviderKeyTimeouts <a name="GoogleIamWorkforcePoolProviderKeyTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKeyTimeouts;

GoogleIamWorkforcePoolProviderKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#create GoogleIamWorkforcePoolProviderKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#delete GoogleIamWorkforcePoolProviderKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#create GoogleIamWorkforcePoolProviderKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#delete GoogleIamWorkforcePoolProviderKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference <a name="GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference;

new GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime">notAfterTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime">notBeforeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput">keySpecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec">keySpec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `notAfterTime`<sup>Required</sup> <a name="notAfterTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime"></a>

```java
public java.lang.String getNotAfterTime();
```

- *Type:* java.lang.String

---

##### `notBeforeTime`<sup>Required</sup> <a name="notBeforeTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime"></a>

```java
public java.lang.String getNotBeforeTime();
```

- *Type:* java.lang.String

---

##### `keySpecInput`<sup>Optional</sup> <a name="keySpecInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput"></a>

```java
public java.lang.String getKeySpecInput();
```

- *Type:* java.lang.String

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec"></a>

```java
public java.lang.String getKeySpec();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue"></a>

```java
public GoogleIamWorkforcePoolProviderKeyKeyData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---


### GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workforce_pool_provider_key.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference;

new GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

---



