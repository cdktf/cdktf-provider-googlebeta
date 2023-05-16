# `google_cloudiot_registry`

Refer to the Terraform Registory for docs: [`google_cloudiot_registry`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry).

# `googleCloudiotRegistry` Submodule <a name="`googleCloudiotRegistry` Submodule" id="@cdktf/provider-google-beta.googleCloudiotRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudiotRegistry <a name="GoogleCloudiotRegistry" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry google_cloudiot_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

new googleCloudiotRegistry.GoogleCloudiotRegistry(scope: Construct, id: string, config: GoogleCloudiotRegistryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig">GoogleCloudiotRegistryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig">GoogleCloudiotRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putEventNotificationConfigs">putEventNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetEventNotificationConfigs">resetEventNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetHttpConfig">resetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetMqttConfig">resetMqttConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetStateNotificationConfig">resetStateNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putCredentials"></a>

```typescript
public putCredentials(value: IResolvable | GoogleCloudiotRegistryCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putCredentials.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a>[]

---

##### `putEventNotificationConfigs` <a name="putEventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putEventNotificationConfigs"></a>

```typescript
public putEventNotificationConfigs(value: IResolvable | GoogleCloudiotRegistryEventNotificationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putEventNotificationConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudiotRegistryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a>

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetEventNotificationConfigs` <a name="resetEventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetEventNotificationConfigs"></a>

```typescript
public resetEventNotificationConfigs(): void
```

##### `resetHttpConfig` <a name="resetHttpConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetHttpConfig"></a>

```typescript
public resetHttpConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMqttConfig` <a name="resetMqttConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetMqttConfig"></a>

```typescript
public resetMqttConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStateNotificationConfig` <a name="resetStateNotificationConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetStateNotificationConfig"></a>

```typescript
public resetStateNotificationConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isConstruct"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

googleCloudiotRegistry.GoogleCloudiotRegistry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformElement"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformResource"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList">GoogleCloudiotRegistryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.eventNotificationConfigs">eventNotificationConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList">GoogleCloudiotRegistryEventNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference">GoogleCloudiotRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.credentialsInput">credentialsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.eventNotificationConfigsInput">eventNotificationConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.httpConfigInput">httpConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.mqttConfigInput">mqttConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.stateNotificationConfigInput">stateNotificationConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.httpConfig">httpConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.mqttConfig">mqttConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.stateNotificationConfig">stateNotificationConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.credentials"></a>

```typescript
public readonly credentials: GoogleCloudiotRegistryCredentialsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList">GoogleCloudiotRegistryCredentialsList</a>

---

##### `eventNotificationConfigs`<sup>Required</sup> <a name="eventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.eventNotificationConfigs"></a>

```typescript
public readonly eventNotificationConfigs: GoogleCloudiotRegistryEventNotificationConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList">GoogleCloudiotRegistryEventNotificationConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudiotRegistryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference">GoogleCloudiotRegistryTimeoutsOutputReference</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IResolvable | GoogleCloudiotRegistryCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a>[]

---

##### `eventNotificationConfigsInput`<sup>Optional</sup> <a name="eventNotificationConfigsInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.eventNotificationConfigsInput"></a>

```typescript
public readonly eventNotificationConfigsInput: IResolvable | GoogleCloudiotRegistryEventNotificationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a>[]

---

##### `httpConfigInput`<sup>Optional</sup> <a name="httpConfigInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.httpConfigInput"></a>

```typescript
public readonly httpConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `mqttConfigInput`<sup>Optional</sup> <a name="mqttConfigInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.mqttConfigInput"></a>

```typescript
public readonly mqttConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `stateNotificationConfigInput`<sup>Optional</sup> <a name="stateNotificationConfigInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.stateNotificationConfigInput"></a>

```typescript
public readonly stateNotificationConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleCloudiotRegistryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a> | cdktf.IResolvable

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.httpConfig"></a>

```typescript
public readonly httpConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `mqttConfig`<sup>Required</sup> <a name="mqttConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.mqttConfig"></a>

```typescript
public readonly mqttConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `stateNotificationConfig`<sup>Required</sup> <a name="stateNotificationConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.stateNotificationConfig"></a>

```typescript
public readonly stateNotificationConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudiotRegistryConfig <a name="GoogleCloudiotRegistryConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

const googleCloudiotRegistryConfig: googleCloudiotRegistry.GoogleCloudiotRegistryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.name">name</a></code> | <code>string</code> | A unique name for the resource, required by device registry. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.credentials">credentials</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a>[]</code> | credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.eventNotificationConfigs">eventNotificationConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a>[]</code> | event_notification_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.httpConfig">httpConfig</a></code> | <code>{[ key: string ]: string}</code> | Activate or deactivate HTTP. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#id GoogleCloudiotRegistry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.logLevel">logLevel</a></code> | <code>string</code> | The default logging verbosity for activity from devices in this registry. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.mqttConfig">mqttConfig</a></code> | <code>{[ key: string ]: string}</code> | Activate or deactivate MQTT. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#project GoogleCloudiotRegistry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.region">region</a></code> | <code>string</code> | The region in which the created registry should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.stateNotificationConfig">stateNotificationConfig</a></code> | <code>{[ key: string ]: string}</code> | A PubSub topic to publish device state updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique name for the resource, required by device registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#name GoogleCloudiotRegistry#name}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.credentials"></a>

```typescript
public readonly credentials: IResolvable | GoogleCloudiotRegistryCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a>[]

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#credentials GoogleCloudiotRegistry#credentials}

---

##### `eventNotificationConfigs`<sup>Optional</sup> <a name="eventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.eventNotificationConfigs"></a>

```typescript
public readonly eventNotificationConfigs: IResolvable | GoogleCloudiotRegistryEventNotificationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a>[]

event_notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#event_notification_configs GoogleCloudiotRegistry#event_notification_configs}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.httpConfig"></a>

```typescript
public readonly httpConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Activate or deactivate HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#http_config GoogleCloudiotRegistry#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#id GoogleCloudiotRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

The default logging verbosity for activity from devices in this registry.

Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#log_level GoogleCloudiotRegistry#log_level}

---

##### `mqttConfig`<sup>Optional</sup> <a name="mqttConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.mqttConfig"></a>

```typescript
public readonly mqttConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Activate or deactivate MQTT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#mqtt_config GoogleCloudiotRegistry#mqtt_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#project GoogleCloudiotRegistry#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region in which the created registry should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#region GoogleCloudiotRegistry#region}

---

##### `stateNotificationConfig`<sup>Optional</sup> <a name="stateNotificationConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.stateNotificationConfig"></a>

```typescript
public readonly stateNotificationConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A PubSub topic to publish device state updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#state_notification_config GoogleCloudiotRegistry#state_notification_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudiotRegistryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#timeouts GoogleCloudiotRegistry#timeouts}

---

### GoogleCloudiotRegistryCredentials <a name="GoogleCloudiotRegistryCredentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

const googleCloudiotRegistryCredentials: googleCloudiotRegistry.GoogleCloudiotRegistryCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials.property.publicKeyCertificate">publicKeyCertificate</a></code> | <code>{[ key: string ]: string}</code> | A public key certificate format and data. |

---

##### `publicKeyCertificate`<sup>Required</sup> <a name="publicKeyCertificate" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials.property.publicKeyCertificate"></a>

```typescript
public readonly publicKeyCertificate: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A public key certificate format and data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#public_key_certificate GoogleCloudiotRegistry#public_key_certificate}

---

### GoogleCloudiotRegistryEventNotificationConfigs <a name="GoogleCloudiotRegistryEventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

const googleCloudiotRegistryEventNotificationConfigs: googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.property.pubsubTopicName">pubsubTopicName</a></code> | <code>string</code> | PubSub topic name to publish device events. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.property.subfolderMatches">subfolderMatches</a></code> | <code>string</code> | If the subfolder name matches this string exactly, this configuration will be used. |

---

##### `pubsubTopicName`<sup>Required</sup> <a name="pubsubTopicName" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.property.pubsubTopicName"></a>

```typescript
public readonly pubsubTopicName: string;
```

- *Type:* string

PubSub topic name to publish device events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#pubsub_topic_name GoogleCloudiotRegistry#pubsub_topic_name}

---

##### `subfolderMatches`<sup>Optional</sup> <a name="subfolderMatches" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.property.subfolderMatches"></a>

```typescript
public readonly subfolderMatches: string;
```

- *Type:* string

If the subfolder name matches this string exactly, this configuration will be used.

The string must not include the
leading '/' character. If empty, all strings are matched. Empty
value can only be used for the last 'event_notification_configs'
item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#subfolder_matches GoogleCloudiotRegistry#subfolder_matches}

---

### GoogleCloudiotRegistryTimeouts <a name="GoogleCloudiotRegistryTimeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

const googleCloudiotRegistryTimeouts: googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#create GoogleCloudiotRegistry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#delete GoogleCloudiotRegistry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#update GoogleCloudiotRegistry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#create GoogleCloudiotRegistry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#delete GoogleCloudiotRegistry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_cloudiot_registry#update GoogleCloudiotRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudiotRegistryCredentialsList <a name="GoogleCloudiotRegistryCredentialsList" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

new googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.get"></a>

```typescript
public get(index: number): GoogleCloudiotRegistryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudiotRegistryCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a>[]

---


### GoogleCloudiotRegistryCredentialsOutputReference <a name="GoogleCloudiotRegistryCredentialsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

new googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.publicKeyCertificateInput">publicKeyCertificateInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.publicKeyCertificate">publicKeyCertificate</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicKeyCertificateInput`<sup>Optional</sup> <a name="publicKeyCertificateInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.publicKeyCertificateInput"></a>

```typescript
public readonly publicKeyCertificateInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `publicKeyCertificate`<sup>Required</sup> <a name="publicKeyCertificate" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.publicKeyCertificate"></a>

```typescript
public readonly publicKeyCertificate: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudiotRegistryCredentials | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials">GoogleCloudiotRegistryCredentials</a> | cdktf.IResolvable

---


### GoogleCloudiotRegistryEventNotificationConfigsList <a name="GoogleCloudiotRegistryEventNotificationConfigsList" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

new googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.get"></a>

```typescript
public get(index: number): GoogleCloudiotRegistryEventNotificationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudiotRegistryEventNotificationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a>[]

---


### GoogleCloudiotRegistryEventNotificationConfigsOutputReference <a name="GoogleCloudiotRegistryEventNotificationConfigsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

new googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resetSubfolderMatches">resetSubfolderMatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubfolderMatches` <a name="resetSubfolderMatches" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resetSubfolderMatches"></a>

```typescript
public resetSubfolderMatches(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicNameInput">pubsubTopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatchesInput">subfolderMatchesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicName">pubsubTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatches">subfolderMatches</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubTopicNameInput`<sup>Optional</sup> <a name="pubsubTopicNameInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicNameInput"></a>

```typescript
public readonly pubsubTopicNameInput: string;
```

- *Type:* string

---

##### `subfolderMatchesInput`<sup>Optional</sup> <a name="subfolderMatchesInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatchesInput"></a>

```typescript
public readonly subfolderMatchesInput: string;
```

- *Type:* string

---

##### `pubsubTopicName`<sup>Required</sup> <a name="pubsubTopicName" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicName"></a>

```typescript
public readonly pubsubTopicName: string;
```

- *Type:* string

---

##### `subfolderMatches`<sup>Required</sup> <a name="subfolderMatches" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatches"></a>

```typescript
public readonly subfolderMatches: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudiotRegistryEventNotificationConfigs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs">GoogleCloudiotRegistryEventNotificationConfigs</a> | cdktf.IResolvable

---


### GoogleCloudiotRegistryTimeoutsOutputReference <a name="GoogleCloudiotRegistryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudiotRegistry } from '@cdktf/provider-google-beta'

new googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudiotRegistryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a> | cdktf.IResolvable

---



