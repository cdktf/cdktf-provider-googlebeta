# `google_logging_organization_bucket_config`

Refer to the Terraform Registory for docs: [`google_logging_organization_bucket_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config).

# `googleLoggingOrganizationBucketConfig` Submodule <a name="`googleLoggingOrganizationBucketConfig` Submodule" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingOrganizationBucketConfig <a name="GoogleLoggingOrganizationBucketConfig" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config google_logging_organization_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_organization_bucket_config.GoogleLoggingOrganizationBucketConfig;

GoogleLoggingOrganizationBucketConfig.Builder.create(Construct scope, java.lang.String id)
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
    .bucketId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .cmekSettings(GoogleLoggingOrganizationBucketConfigCmekSettings)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .retentionDays(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.bucketId">bucketId</a></code> | <code>java.lang.String</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#id GoogleLoggingOrganizationBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.bucketId"></a>

- *Type:* java.lang.String

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#bucket_id GoogleLoggingOrganizationBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#location GoogleLoggingOrganizationBucketConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#organization GoogleLoggingOrganizationBucketConfig#organization}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.cmekSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#cmek_settings GoogleLoggingOrganizationBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#description GoogleLoggingOrganizationBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#id GoogleLoggingOrganizationBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.retentionDays"></a>

- *Type:* java.lang.Number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#retention_days GoogleLoggingOrganizationBucketConfig#retention_days}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings">putCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetCmekSettings">resetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCmekSettings` <a name="putCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings"></a>

```java
public void putCmekSettings(GoogleLoggingOrganizationBucketConfigCmekSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---

##### `resetCmekSettings` <a name="resetCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetCmekSettings"></a>

```java
public void resetCmekSettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetId"></a>

```java
public void resetId()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_organization_bucket_config.GoogleLoggingOrganizationBucketConfig;

GoogleLoggingOrganizationBucketConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_organization_bucket_config.GoogleLoggingOrganizationBucketConfig;

GoogleLoggingOrganizationBucketConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_organization_bucket_config.GoogleLoggingOrganizationBucketConfig;

GoogleLoggingOrganizationBucketConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference">GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketIdInput">bucketIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettingsInput">cmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketId">bucketId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cmekSettings`<sup>Required</sup> <a name="cmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettings"></a>

```java
public GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference getCmekSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference">GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `bucketIdInput`<sup>Optional</sup> <a name="bucketIdInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketIdInput"></a>

```java
public java.lang.String getBucketIdInput();
```

- *Type:* java.lang.String

---

##### `cmekSettingsInput`<sup>Optional</sup> <a name="cmekSettingsInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettingsInput"></a>

```java
public GoogleLoggingOrganizationBucketConfigCmekSettings getCmekSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketId"></a>

```java
public java.lang.String getBucketId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingOrganizationBucketConfigCmekSettings <a name="GoogleLoggingOrganizationBucketConfigCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_organization_bucket_config.GoogleLoggingOrganizationBucketConfigCmekSettings;

GoogleLoggingOrganizationBucketConfigCmekSettings.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name for the configured Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#kms_key_name GoogleLoggingOrganizationBucketConfig#kms_key_name}

---

### GoogleLoggingOrganizationBucketConfigConfig <a name="GoogleLoggingOrganizationBucketConfigConfig" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_organization_bucket_config.GoogleLoggingOrganizationBucketConfigConfig;

GoogleLoggingOrganizationBucketConfigConfig.builder()
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
    .bucketId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .cmekSettings(GoogleLoggingOrganizationBucketConfigCmekSettings)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.bucketId">bucketId</a></code> | <code>java.lang.String</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#id GoogleLoggingOrganizationBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.bucketId"></a>

```java
public java.lang.String getBucketId();
```

- *Type:* java.lang.String

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#bucket_id GoogleLoggingOrganizationBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#location GoogleLoggingOrganizationBucketConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#organization GoogleLoggingOrganizationBucketConfig#organization}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.cmekSettings"></a>

```java
public GoogleLoggingOrganizationBucketConfigCmekSettings getCmekSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#cmek_settings GoogleLoggingOrganizationBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#description GoogleLoggingOrganizationBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#id GoogleLoggingOrganizationBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_logging_organization_bucket_config#retention_days GoogleLoggingOrganizationBucketConfig#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference <a name="GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_organization_bucket_config.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference;

new GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```java
public java.lang.String getKmsKeyVersionName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```java
public GoogleLoggingOrganizationBucketConfigCmekSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---



