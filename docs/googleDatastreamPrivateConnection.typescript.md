# `google_datastream_private_connection`

Refer to the Terraform Registory for docs: [`google_datastream_private_connection`](https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection).

# `googleDatastreamPrivateConnection` Submodule <a name="`googleDatastreamPrivateConnection` Submodule" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatastreamPrivateConnection <a name="GoogleDatastreamPrivateConnection" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection google_datastream_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

new googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection(scope: Construct, id: string, config: GoogleDatastreamPrivateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig">GoogleDatastreamPrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig">GoogleDatastreamPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putVpcPeeringConfig">putVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDatastreamPrivateConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a>

---

##### `putVpcPeeringConfig` <a name="putVpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putVpcPeeringConfig"></a>

```typescript
public putVpcPeeringConfig(value: GoogleDatastreamPrivateConnectionVpcPeeringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putVpcPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isConstruct"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformElement"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformResource"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList">GoogleDatastreamPrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference">GoogleDatastreamPrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference">GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.privateConnectionIdInput">privateConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.vpcPeeringConfigInput">vpcPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.privateConnectionId">privateConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.error"></a>

```typescript
public readonly error: GoogleDatastreamPrivateConnectionErrorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList">GoogleDatastreamPrivateConnectionErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatastreamPrivateConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference">GoogleDatastreamPrivateConnectionTimeoutsOutputReference</a>

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.vpcPeeringConfig"></a>

```typescript
public readonly vpcPeeringConfig: GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference">GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `privateConnectionIdInput`<sup>Optional</sup> <a name="privateConnectionIdInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.privateConnectionIdInput"></a>

```typescript
public readonly privateConnectionIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleDatastreamPrivateConnectionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a> | cdktf.IResolvable

---

##### `vpcPeeringConfigInput`<sup>Optional</sup> <a name="vpcPeeringConfigInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.vpcPeeringConfigInput"></a>

```typescript
public readonly vpcPeeringConfigInput: GoogleDatastreamPrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.privateConnectionId"></a>

```typescript
public readonly privateConnectionId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatastreamPrivateConnectionConfig <a name="GoogleDatastreamPrivateConnectionConfig" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

const googleDatastreamPrivateConnectionConfig: googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.location">location</a></code> | <code>string</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.privateConnectionId">privateConnectionId</a></code> | <code>string</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#id GoogleDatastreamPrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#project GoogleDatastreamPrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#display_name GoogleDatastreamPrivateConnection#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#location GoogleDatastreamPrivateConnection#location}

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.privateConnectionId"></a>

```typescript
public readonly privateConnectionId: string;
```

- *Type:* string

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#private_connection_id GoogleDatastreamPrivateConnection#private_connection_id}

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.vpcPeeringConfig"></a>

```typescript
public readonly vpcPeeringConfig: GoogleDatastreamPrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#vpc_peering_config GoogleDatastreamPrivateConnection#vpc_peering_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#id GoogleDatastreamPrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#labels GoogleDatastreamPrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#project GoogleDatastreamPrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatastreamPrivateConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#timeouts GoogleDatastreamPrivateConnection#timeouts}

---

### GoogleDatastreamPrivateConnectionError <a name="GoogleDatastreamPrivateConnectionError" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

const googleDatastreamPrivateConnectionError: googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError = { ... }
```


### GoogleDatastreamPrivateConnectionTimeouts <a name="GoogleDatastreamPrivateConnectionTimeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

const googleDatastreamPrivateConnectionTimeouts: googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#create GoogleDatastreamPrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#delete GoogleDatastreamPrivateConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#create GoogleDatastreamPrivateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#delete GoogleDatastreamPrivateConnection#delete}.

---

### GoogleDatastreamPrivateConnectionVpcPeeringConfig <a name="GoogleDatastreamPrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

const googleDatastreamPrivateConnectionVpcPeeringConfig: googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.property.subnet">subnet</a></code> | <code>string</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.property.vpc">vpc</a></code> | <code>string</code> | Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#subnet GoogleDatastreamPrivateConnection#subnet}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_datastream_private_connection#vpc GoogleDatastreamPrivateConnection#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatastreamPrivateConnectionErrorList <a name="GoogleDatastreamPrivateConnectionErrorList" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

new googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.get"></a>

```typescript
public get(index: number): GoogleDatastreamPrivateConnectionErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDatastreamPrivateConnectionErrorOutputReference <a name="GoogleDatastreamPrivateConnectionErrorOutputReference" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

new googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError">GoogleDatastreamPrivateConnectionError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamPrivateConnectionError;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError">GoogleDatastreamPrivateConnectionError</a>

---


### GoogleDatastreamPrivateConnectionTimeoutsOutputReference <a name="GoogleDatastreamPrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

new googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamPrivateConnectionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a> | cdktf.IResolvable

---


### GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference <a name="GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```typescript
import { googleDatastreamPrivateConnection } from '@cdktf/provider-google-beta'

new googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamPrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a>

---



