# `google_cloudiot_device`

Refer to the Terraform Registory for docs: [`google_cloudiot_device`](https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device).

# `googleCloudiotDevice` Submodule <a name="`googleCloudiotDevice` Submodule" id="@cdktf/provider-google-beta.googleCloudiotDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudiotDevice <a name="GoogleCloudiotDevice" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device google_cloudiot_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDevice;

GoogleCloudiotDevice.Builder.create(Construct scope, java.lang.String id)
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
    .registry(java.lang.String)
//  .blocked(java.lang.Boolean)
//  .blocked(IResolvable)
//  .credentials(IResolvable)
//  .credentials(java.util.List<GoogleCloudiotDeviceCredentials>)
//  .gatewayConfig(GoogleCloudiotDeviceGatewayConfig)
//  .id(java.lang.String)
//  .logLevel(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleCloudiotDeviceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique name for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.registry">registry</a></code> | <code>java.lang.String</code> | The name of the device registry where this device should be created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a device is blocked, connections or requests from this device will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.credentials">credentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>></code> | credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.gatewayConfig">gatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The metadata key-value pairs assigned to the device. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique name for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#name GoogleCloudiotDevice#name}

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.registry"></a>

- *Type:* java.lang.String

The name of the device registry where this device should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#registry GoogleCloudiotDevice#registry}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.blocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a device is blocked, connections or requests from this device will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#blocked GoogleCloudiotDevice#blocked}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.credentials"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#credentials GoogleCloudiotDevice#credentials}

---

##### `gatewayConfig`<sup>Optional</sup> <a name="gatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.gatewayConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#gateway_config GoogleCloudiotDevice#gateway_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#log_level GoogleCloudiotDevice#log_level}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The metadata key-value pairs assigned to the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#metadata GoogleCloudiotDevice#metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#timeouts GoogleCloudiotDevice#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig">putGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetBlocked">resetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetGatewayConfig">resetGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials"></a>

```java
public void putCredentials(IResolvable OR java.util.List<GoogleCloudiotDeviceCredentials> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>>

---

##### `putGatewayConfig` <a name="putGatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig"></a>

```java
public void putGatewayConfig(GoogleCloudiotDeviceGatewayConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudiotDeviceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

---

##### `resetBlocked` <a name="resetBlocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetBlocked"></a>

```java
public void resetBlocked()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetGatewayConfig` <a name="resetGatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetGatewayConfig"></a>

```java
public void resetGatewayConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetId"></a>

```java
public void resetId()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDevice;

GoogleCloudiotDevice.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDevice;

GoogleCloudiotDevice.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDevice;

GoogleCloudiotDevice.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList">GoogleCloudiotDeviceConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList">GoogleCloudiotDeviceCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfig">gatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference">GoogleCloudiotDeviceGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigAckTime">lastConfigAckTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigSendTime">lastConfigSendTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorStatus">lastErrorStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList">GoogleCloudiotDeviceLastErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorTime">lastErrorTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastEventTime">lastEventTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastHeartbeatTime">lastHeartbeatTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastStateTime">lastStateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.numId">numId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList">GoogleCloudiotDeviceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference">GoogleCloudiotDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blockedInput">blockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentialsInput">credentialsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfigInput">gatewayConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registryInput">registryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registry">registry</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.config"></a>

```java
public GoogleCloudiotDeviceConfigAList getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList">GoogleCloudiotDeviceConfigAList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentials"></a>

```java
public GoogleCloudiotDeviceCredentialsList getCredentials();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList">GoogleCloudiotDeviceCredentialsList</a>

---

##### `gatewayConfig`<sup>Required</sup> <a name="gatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfig"></a>

```java
public GoogleCloudiotDeviceGatewayConfigOutputReference getGatewayConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference">GoogleCloudiotDeviceGatewayConfigOutputReference</a>

---

##### `lastConfigAckTime`<sup>Required</sup> <a name="lastConfigAckTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigAckTime"></a>

```java
public java.lang.String getLastConfigAckTime();
```

- *Type:* java.lang.String

---

##### `lastConfigSendTime`<sup>Required</sup> <a name="lastConfigSendTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigSendTime"></a>

```java
public java.lang.String getLastConfigSendTime();
```

- *Type:* java.lang.String

---

##### `lastErrorStatus`<sup>Required</sup> <a name="lastErrorStatus" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorStatus"></a>

```java
public GoogleCloudiotDeviceLastErrorStatusList getLastErrorStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList">GoogleCloudiotDeviceLastErrorStatusList</a>

---

##### `lastErrorTime`<sup>Required</sup> <a name="lastErrorTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorTime"></a>

```java
public java.lang.String getLastErrorTime();
```

- *Type:* java.lang.String

---

##### `lastEventTime`<sup>Required</sup> <a name="lastEventTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastEventTime"></a>

```java
public java.lang.String getLastEventTime();
```

- *Type:* java.lang.String

---

##### `lastHeartbeatTime`<sup>Required</sup> <a name="lastHeartbeatTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastHeartbeatTime"></a>

```java
public java.lang.String getLastHeartbeatTime();
```

- *Type:* java.lang.String

---

##### `lastStateTime`<sup>Required</sup> <a name="lastStateTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastStateTime"></a>

```java
public java.lang.String getLastStateTime();
```

- *Type:* java.lang.String

---

##### `numId`<sup>Required</sup> <a name="numId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.numId"></a>

```java
public java.lang.String getNumId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.state"></a>

```java
public GoogleCloudiotDeviceStateList getState();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList">GoogleCloudiotDeviceStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeouts"></a>

```java
public GoogleCloudiotDeviceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference">GoogleCloudiotDeviceTimeoutsOutputReference</a>

---

##### `blockedInput`<sup>Optional</sup> <a name="blockedInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blockedInput"></a>

```java
public java.lang.Object getBlockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentialsInput"></a>

```java
public java.lang.Object getCredentialsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>>

---

##### `gatewayConfigInput`<sup>Optional</sup> <a name="gatewayConfigInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfigInput"></a>

```java
public GoogleCloudiotDeviceGatewayConfig getGatewayConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registryInput"></a>

```java
public java.lang.String getRegistryInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

---

##### `blocked`<sup>Required</sup> <a name="blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blocked"></a>

```java
public java.lang.Object getBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudiotDeviceConfig <a name="GoogleCloudiotDeviceConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceConfig;

GoogleCloudiotDeviceConfig.builder()
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
    .registry(java.lang.String)
//  .blocked(java.lang.Boolean)
//  .blocked(IResolvable)
//  .credentials(IResolvable)
//  .credentials(java.util.List<GoogleCloudiotDeviceCredentials>)
//  .gatewayConfig(GoogleCloudiotDeviceGatewayConfig)
//  .id(java.lang.String)
//  .logLevel(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleCloudiotDeviceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique name for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.registry">registry</a></code> | <code>java.lang.String</code> | The name of the device registry where this device should be created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.blocked">blocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a device is blocked, connections or requests from this device will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.credentials">credentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>></code> | credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.gatewayConfig">gatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The metadata key-value pairs assigned to the device. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique name for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#name GoogleCloudiotDevice#name}

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

The name of the device registry where this device should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#registry GoogleCloudiotDevice#registry}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.blocked"></a>

```java
public java.lang.Object getBlocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a device is blocked, connections or requests from this device will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#blocked GoogleCloudiotDevice#blocked}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.credentials"></a>

```java
public java.lang.Object getCredentials();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#credentials GoogleCloudiotDevice#credentials}

---

##### `gatewayConfig`<sup>Optional</sup> <a name="gatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.gatewayConfig"></a>

```java
public GoogleCloudiotDeviceGatewayConfig getGatewayConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#gateway_config GoogleCloudiotDevice#gateway_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#log_level GoogleCloudiotDevice#log_level}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The metadata key-value pairs assigned to the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#metadata GoogleCloudiotDevice#metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.timeouts"></a>

```java
public GoogleCloudiotDeviceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#timeouts GoogleCloudiotDevice#timeouts}

---

### GoogleCloudiotDeviceConfigA <a name="GoogleCloudiotDeviceConfigA" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceConfigA;

GoogleCloudiotDeviceConfigA.builder()
    .build();
```


### GoogleCloudiotDeviceCredentials <a name="GoogleCloudiotDeviceCredentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceCredentials;

GoogleCloudiotDeviceCredentials.builder()
    .publicKey(GoogleCloudiotDeviceCredentialsPublicKey)
//  .expirationTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | public_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | The time at which this credential becomes invalid. |

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.publicKey"></a>

```java
public GoogleCloudiotDeviceCredentialsPublicKey getPublicKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#public_key GoogleCloudiotDevice#public_key}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

The time at which this credential becomes invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#expiration_time GoogleCloudiotDevice#expiration_time}

---

### GoogleCloudiotDeviceCredentialsPublicKey <a name="GoogleCloudiotDeviceCredentialsPublicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceCredentialsPublicKey;

GoogleCloudiotDeviceCredentialsPublicKey.builder()
    .format(java.lang.String)
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.format">format</a></code> | <code>java.lang.String</code> | The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.key">key</a></code> | <code>java.lang.String</code> | The key data. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#format GoogleCloudiotDevice#format}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#key GoogleCloudiotDevice#key}

---

### GoogleCloudiotDeviceGatewayConfig <a name="GoogleCloudiotDeviceGatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceGatewayConfig;

GoogleCloudiotDeviceGatewayConfig.builder()
//  .gatewayAuthMethod(java.lang.String)
//  .gatewayType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayAuthMethod">gatewayAuthMethod</a></code> | <code>java.lang.String</code> | Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayType">gatewayType</a></code> | <code>java.lang.String</code> | Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"]. |

---

##### `gatewayAuthMethod`<sup>Optional</sup> <a name="gatewayAuthMethod" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayAuthMethod"></a>

```java
public java.lang.String getGatewayAuthMethod();
```

- *Type:* java.lang.String

Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#gateway_auth_method GoogleCloudiotDevice#gateway_auth_method}

---

##### `gatewayType`<sup>Optional</sup> <a name="gatewayType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayType"></a>

```java
public java.lang.String getGatewayType();
```

- *Type:* java.lang.String

Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#gateway_type GoogleCloudiotDevice#gateway_type}

---

### GoogleCloudiotDeviceLastErrorStatus <a name="GoogleCloudiotDeviceLastErrorStatus" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceLastErrorStatus;

GoogleCloudiotDeviceLastErrorStatus.builder()
    .build();
```


### GoogleCloudiotDeviceState <a name="GoogleCloudiotDeviceState" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceState;

GoogleCloudiotDeviceState.builder()
    .build();
```


### GoogleCloudiotDeviceTimeouts <a name="GoogleCloudiotDeviceTimeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceTimeouts;

GoogleCloudiotDeviceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#create GoogleCloudiotDevice#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#delete GoogleCloudiotDevice#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#update GoogleCloudiotDevice#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#create GoogleCloudiotDevice#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#delete GoogleCloudiotDevice#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_cloudiot_device#update GoogleCloudiotDevice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudiotDeviceConfigAList <a name="GoogleCloudiotDeviceConfigAList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceConfigAList;

new GoogleCloudiotDeviceConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get"></a>

```java
public GoogleCloudiotDeviceConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudiotDeviceConfigAOutputReference <a name="GoogleCloudiotDeviceConfigAOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceConfigAOutputReference;

new GoogleCloudiotDeviceConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.binaryData">binaryData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.cloudUpdateTime">cloudUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.deviceAckTime">deviceAckTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA">GoogleCloudiotDeviceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `binaryData`<sup>Required</sup> <a name="binaryData" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.binaryData"></a>

```java
public java.lang.String getBinaryData();
```

- *Type:* java.lang.String

---

##### `cloudUpdateTime`<sup>Required</sup> <a name="cloudUpdateTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.cloudUpdateTime"></a>

```java
public java.lang.String getCloudUpdateTime();
```

- *Type:* java.lang.String

---

##### `deviceAckTime`<sup>Required</sup> <a name="deviceAckTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.deviceAckTime"></a>

```java
public java.lang.String getDeviceAckTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.internalValue"></a>

```java
public GoogleCloudiotDeviceConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA">GoogleCloudiotDeviceConfigA</a>

---


### GoogleCloudiotDeviceCredentialsList <a name="GoogleCloudiotDeviceCredentialsList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceCredentialsList;

new GoogleCloudiotDeviceCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get"></a>

```java
public GoogleCloudiotDeviceCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>>

---


### GoogleCloudiotDeviceCredentialsOutputReference <a name="GoogleCloudiotDeviceCredentialsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceCredentialsOutputReference;

new GoogleCloudiotDeviceCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey">putPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicKey` <a name="putPublicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey"></a>

```java
public void putPublicKey(GoogleCloudiotDeviceCredentialsPublicKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

---

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resetExpirationTime"></a>

```java
public void resetExpirationTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference">GoogleCloudiotDeviceCredentialsPublicKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTimeInput">expirationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKey"></a>

```java
public GoogleCloudiotDeviceCredentialsPublicKeyOutputReference getPublicKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference">GoogleCloudiotDeviceCredentialsPublicKeyOutputReference</a>

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTimeInput"></a>

```java
public java.lang.String getExpirationTimeInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKeyInput"></a>

```java
public GoogleCloudiotDeviceCredentialsPublicKey getPublicKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>

---


### GoogleCloudiotDeviceCredentialsPublicKeyOutputReference <a name="GoogleCloudiotDeviceCredentialsPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference;

new GoogleCloudiotDeviceCredentialsPublicKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue"></a>

```java
public GoogleCloudiotDeviceCredentialsPublicKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

---


### GoogleCloudiotDeviceGatewayConfigOutputReference <a name="GoogleCloudiotDeviceGatewayConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceGatewayConfigOutputReference;

new GoogleCloudiotDeviceGatewayConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod">resetGatewayAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayType">resetGatewayType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGatewayAuthMethod` <a name="resetGatewayAuthMethod" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod"></a>

```java
public void resetGatewayAuthMethod()
```

##### `resetGatewayType` <a name="resetGatewayType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayType"></a>

```java
public void resetGatewayType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId">lastAccessedGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime">lastAccessedGatewayTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput">gatewayAuthMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput">gatewayTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod">gatewayAuthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayType">gatewayType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastAccessedGatewayId`<sup>Required</sup> <a name="lastAccessedGatewayId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId"></a>

```java
public java.lang.String getLastAccessedGatewayId();
```

- *Type:* java.lang.String

---

##### `lastAccessedGatewayTime`<sup>Required</sup> <a name="lastAccessedGatewayTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime"></a>

```java
public java.lang.String getLastAccessedGatewayTime();
```

- *Type:* java.lang.String

---

##### `gatewayAuthMethodInput`<sup>Optional</sup> <a name="gatewayAuthMethodInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput"></a>

```java
public java.lang.String getGatewayAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `gatewayTypeInput`<sup>Optional</sup> <a name="gatewayTypeInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput"></a>

```java
public java.lang.String getGatewayTypeInput();
```

- *Type:* java.lang.String

---

##### `gatewayAuthMethod`<sup>Required</sup> <a name="gatewayAuthMethod" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod"></a>

```java
public java.lang.String getGatewayAuthMethod();
```

- *Type:* java.lang.String

---

##### `gatewayType`<sup>Required</sup> <a name="gatewayType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayType"></a>

```java
public java.lang.String getGatewayType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudiotDeviceGatewayConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

---


### GoogleCloudiotDeviceLastErrorStatusList <a name="GoogleCloudiotDeviceLastErrorStatusList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceLastErrorStatusList;

new GoogleCloudiotDeviceLastErrorStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get"></a>

```java
public GoogleCloudiotDeviceLastErrorStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudiotDeviceLastErrorStatusOutputReference <a name="GoogleCloudiotDeviceLastErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceLastErrorStatusOutputReference;

new GoogleCloudiotDeviceLastErrorStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.details">details</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.number">number</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus">GoogleCloudiotDeviceLastErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.internalValue"></a>

```java
public GoogleCloudiotDeviceLastErrorStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus">GoogleCloudiotDeviceLastErrorStatus</a>

---


### GoogleCloudiotDeviceStateList <a name="GoogleCloudiotDeviceStateList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceStateList;

new GoogleCloudiotDeviceStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get"></a>

```java
public GoogleCloudiotDeviceStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudiotDeviceStateOutputReference <a name="GoogleCloudiotDeviceStateOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceStateOutputReference;

new GoogleCloudiotDeviceStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.binaryData">binaryData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState">GoogleCloudiotDeviceState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `binaryData`<sup>Required</sup> <a name="binaryData" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.binaryData"></a>

```java
public java.lang.String getBinaryData();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.internalValue"></a>

```java
public GoogleCloudiotDeviceState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState">GoogleCloudiotDeviceState</a>

---


### GoogleCloudiotDeviceTimeoutsOutputReference <a name="GoogleCloudiotDeviceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloudiot_device.GoogleCloudiotDeviceTimeoutsOutputReference;

new GoogleCloudiotDeviceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

---



