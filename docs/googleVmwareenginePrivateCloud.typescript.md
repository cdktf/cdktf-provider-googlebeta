# `google_vmwareengine_private_cloud`

Refer to the Terraform Registory for docs: [`google_vmwareengine_private_cloud`](https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud).

# `googleVmwareenginePrivateCloud` Submodule <a name="`googleVmwareenginePrivateCloud` Submodule" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareenginePrivateCloud <a name="GoogleVmwareenginePrivateCloud" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud google_vmwareengine_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud(scope: Construct, id: string, config: GoogleVmwareenginePrivateCloudConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig">GoogleVmwareenginePrivateCloudConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig">GoogleVmwareenginePrivateCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putManagementCluster">putManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putManagementCluster` <a name="putManagementCluster" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putManagementCluster"></a>

```typescript
public putManagementCluster(value: GoogleVmwareenginePrivateCloudManagementCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putManagementCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleVmwareenginePrivateCloudNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVmwareenginePrivateCloudTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isConstruct"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformElement"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformResource"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.hcx">hcx</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList">GoogleVmwareenginePrivateCloudHcxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.managementCluster">managementCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference">GoogleVmwareenginePrivateCloudManagementClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference">GoogleVmwareenginePrivateCloudNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.nsx">nsx</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList">GoogleVmwareenginePrivateCloudNsxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference">GoogleVmwareenginePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList">GoogleVmwareenginePrivateCloudVcenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.managementClusterInput">managementClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hcx`<sup>Required</sup> <a name="hcx" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.hcx"></a>

```typescript
public readonly hcx: GoogleVmwareenginePrivateCloudHcxList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList">GoogleVmwareenginePrivateCloudHcxList</a>

---

##### `managementCluster`<sup>Required</sup> <a name="managementCluster" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.managementCluster"></a>

```typescript
public readonly managementCluster: GoogleVmwareenginePrivateCloudManagementClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference">GoogleVmwareenginePrivateCloudManagementClusterOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleVmwareenginePrivateCloudNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference">GoogleVmwareenginePrivateCloudNetworkConfigOutputReference</a>

---

##### `nsx`<sup>Required</sup> <a name="nsx" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.nsx"></a>

```typescript
public readonly nsx: GoogleVmwareenginePrivateCloudNsxList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList">GoogleVmwareenginePrivateCloudNsxList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareenginePrivateCloudTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference">GoogleVmwareenginePrivateCloudTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.vcenter"></a>

```typescript
public readonly vcenter: GoogleVmwareenginePrivateCloudVcenterList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList">GoogleVmwareenginePrivateCloudVcenterList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementClusterInput`<sup>Optional</sup> <a name="managementClusterInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.managementClusterInput"></a>

```typescript
public readonly managementClusterInput: GoogleVmwareenginePrivateCloudManagementCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleVmwareenginePrivateCloudNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVmwareenginePrivateCloudTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareenginePrivateCloudConfig <a name="GoogleVmwareenginePrivateCloudConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

const googleVmwareenginePrivateCloudConfig: googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.location">location</a></code> | <code>string</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.managementCluster">managementCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.name">name</a></code> | <code>string</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.description">description</a></code> | <code>string</code> | User-provided description for this private cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#id GoogleVmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#project GoogleVmwareenginePrivateCloud#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#location GoogleVmwareenginePrivateCloud#location}

---

##### `managementCluster`<sup>Required</sup> <a name="managementCluster" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.managementCluster"></a>

```typescript
public readonly managementCluster: GoogleVmwareenginePrivateCloudManagementCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#management_cluster GoogleVmwareenginePrivateCloud#management_cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#name GoogleVmwareenginePrivateCloud#name}

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleVmwareenginePrivateCloudNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#network_config GoogleVmwareenginePrivateCloud#network_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description for this private cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#description GoogleVmwareenginePrivateCloud#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#id GoogleVmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#project GoogleVmwareenginePrivateCloud#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareenginePrivateCloudTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#timeouts GoogleVmwareenginePrivateCloud#timeouts}

---

### GoogleVmwareenginePrivateCloudHcx <a name="GoogleVmwareenginePrivateCloudHcx" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

const googleVmwareenginePrivateCloudHcx: googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx = { ... }
```


### GoogleVmwareenginePrivateCloudManagementCluster <a name="GoogleVmwareenginePrivateCloudManagementCluster" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

const googleVmwareenginePrivateCloudManagementCluster: googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.property.clusterId">clusterId</a></code> | <code>string</code> | The user-provided identifier of the new Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>[]</code> | node_type_configs block. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The user-provided identifier of the new Cluster.

The identifier must meet the following requirements:
Only contains 1-63 alphanumeric characters and hyphens
Begins with an alphabetical character
Ends with a non-hyphen character
Not formatted as a UUID
Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#cluster_id GoogleVmwareenginePrivateCloud#cluster_id}

---

##### `nodeTypeConfigs`<sup>Optional</sup> <a name="nodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.property.nodeTypeConfigs"></a>

```typescript
public readonly nodeTypeConfigs: IResolvable | GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>[]

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#node_type_configs GoogleVmwareenginePrivateCloud#node_type_configs}

---

### GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs <a name="GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

const googleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs: googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes of this type in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#node_type_id GoogleVmwareenginePrivateCloud#node_type_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.customCoreCount">customCoreCount</a></code> | <code>number</code> | Customized number of cores available to each node of the type. |

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes of this type in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#node_count GoogleVmwareenginePrivateCloud#node_count}

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#node_type_id GoogleVmwareenginePrivateCloud#node_type_id}.

---

##### `customCoreCount`<sup>Optional</sup> <a name="customCoreCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.customCoreCount"></a>

```typescript
public readonly customCoreCount: number;
```

- *Type:* number

Customized number of cores available to each node of the type.

This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
This cannot be changed once the PrivateCloud is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#custom_core_count GoogleVmwareenginePrivateCloud#custom_core_count}

---

### GoogleVmwareenginePrivateCloudNetworkConfig <a name="GoogleVmwareenginePrivateCloudNetworkConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

const googleVmwareenginePrivateCloudNetworkConfig: googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.property.managementCidr">managementCidr</a></code> | <code>string</code> | Management CIDR used by VMware management appliances. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>string</code> | The relative resource name of the VMware Engine network attached to the private cloud. |

---

##### `managementCidr`<sup>Required</sup> <a name="managementCidr" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.property.managementCidr"></a>

```typescript
public readonly managementCidr: string;
```

- *Type:* string

Management CIDR used by VMware management appliances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#management_cidr GoogleVmwareenginePrivateCloud#management_cidr}

---

##### `vmwareEngineNetwork`<sup>Optional</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.property.vmwareEngineNetwork"></a>

```typescript
public readonly vmwareEngineNetwork: string;
```

- *Type:* string

The relative resource name of the VMware Engine network attached to the private cloud.

Specify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
where {project} can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#vmware_engine_network GoogleVmwareenginePrivateCloud#vmware_engine_network}

---

### GoogleVmwareenginePrivateCloudNsx <a name="GoogleVmwareenginePrivateCloudNsx" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

const googleVmwareenginePrivateCloudNsx: googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx = { ... }
```


### GoogleVmwareenginePrivateCloudTimeouts <a name="GoogleVmwareenginePrivateCloudTimeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

const googleVmwareenginePrivateCloudTimeouts: googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#create GoogleVmwareenginePrivateCloud#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#delete GoogleVmwareenginePrivateCloud#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#update GoogleVmwareenginePrivateCloud#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#create GoogleVmwareenginePrivateCloud#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#delete GoogleVmwareenginePrivateCloud#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_vmwareengine_private_cloud#update GoogleVmwareenginePrivateCloud#update}.

---

### GoogleVmwareenginePrivateCloudVcenter <a name="GoogleVmwareenginePrivateCloudVcenter" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

const googleVmwareenginePrivateCloudVcenter: googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareenginePrivateCloudHcxList <a name="GoogleVmwareenginePrivateCloudHcxList" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.get"></a>

```typescript
public get(index: number): GoogleVmwareenginePrivateCloudHcxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVmwareenginePrivateCloudHcxOutputReference <a name="GoogleVmwareenginePrivateCloudHcxOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx">GoogleVmwareenginePrivateCloudHcx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareenginePrivateCloudHcx;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx">GoogleVmwareenginePrivateCloudHcx</a>

---


### GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList <a name="GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get"></a>

```typescript
public get(index: number): GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>[]

---


### GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference <a name="GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resetCustomCoreCount">resetCustomCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomCoreCount` <a name="resetCustomCoreCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resetCustomCoreCount"></a>

```typescript
public resetCustomCoreCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCountInput">customCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount">customCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCoreCountInput`<sup>Optional</sup> <a name="customCoreCountInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCountInput"></a>

```typescript
public readonly customCoreCountInput: number;
```

- *Type:* number

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput"></a>

```typescript
public readonly nodeTypeIdInput: string;
```

- *Type:* string

---

##### `customCoreCount`<sup>Required</sup> <a name="customCoreCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```typescript
public readonly customCoreCount: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>

---


### GoogleVmwareenginePrivateCloudManagementClusterOutputReference <a name="GoogleVmwareenginePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs">putNodeTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resetNodeTypeConfigs">resetNodeTypeConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeTypeConfigs` <a name="putNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs"></a>

```typescript
public putNodeTypeConfigs(value: IResolvable | GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>[]

---

##### `resetNodeTypeConfigs` <a name="resetNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resetNodeTypeConfigs"></a>

```typescript
public resetNodeTypeConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigsInput">nodeTypeConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeTypeConfigs`<sup>Required</sup> <a name="nodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs"></a>

```typescript
public readonly nodeTypeConfigs: GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `nodeTypeConfigsInput`<sup>Optional</sup> <a name="nodeTypeConfigsInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigsInput"></a>

```typescript
public readonly nodeTypeConfigsInput: IResolvable | GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareenginePrivateCloudManagementCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a>

---


### GoogleVmwareenginePrivateCloudNetworkConfigOutputReference <a name="GoogleVmwareenginePrivateCloudNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resetVmwareEngineNetwork">resetVmwareEngineNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVmwareEngineNetwork` <a name="resetVmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resetVmwareEngineNetwork"></a>

```typescript
public resetVmwareEngineNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion">managementIpAddressLayoutVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidrInput">managementCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkInput">vmwareEngineNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr">managementCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managementIpAddressLayoutVersion`<sup>Required</sup> <a name="managementIpAddressLayoutVersion" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion"></a>

```typescript
public readonly managementIpAddressLayoutVersion: number;
```

- *Type:* number

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical"></a>

```typescript
public readonly vmwareEngineNetworkCanonical: string;
```

- *Type:* string

---

##### `managementCidrInput`<sup>Optional</sup> <a name="managementCidrInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidrInput"></a>

```typescript
public readonly managementCidrInput: string;
```

- *Type:* string

---

##### `vmwareEngineNetworkInput`<sup>Optional</sup> <a name="vmwareEngineNetworkInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkInput"></a>

```typescript
public readonly vmwareEngineNetworkInput: string;
```

- *Type:* string

---

##### `managementCidr`<sup>Required</sup> <a name="managementCidr" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr"></a>

```typescript
public readonly managementCidr: string;
```

- *Type:* string

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork"></a>

```typescript
public readonly vmwareEngineNetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareenginePrivateCloudNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a>

---


### GoogleVmwareenginePrivateCloudNsxList <a name="GoogleVmwareenginePrivateCloudNsxList" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.get"></a>

```typescript
public get(index: number): GoogleVmwareenginePrivateCloudNsxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVmwareenginePrivateCloudNsxOutputReference <a name="GoogleVmwareenginePrivateCloudNsxOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx">GoogleVmwareenginePrivateCloudNsx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareenginePrivateCloudNsx;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx">GoogleVmwareenginePrivateCloudNsx</a>

---


### GoogleVmwareenginePrivateCloudTimeoutsOutputReference <a name="GoogleVmwareenginePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareenginePrivateCloudTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a>

---


### GoogleVmwareenginePrivateCloudVcenterList <a name="GoogleVmwareenginePrivateCloudVcenterList" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.get"></a>

```typescript
public get(index: number): GoogleVmwareenginePrivateCloudVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVmwareenginePrivateCloudVcenterOutputReference <a name="GoogleVmwareenginePrivateCloudVcenterOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer"></a>

```typescript
import { googleVmwareenginePrivateCloud } from '@cdktf/provider-google-beta'

new googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter">GoogleVmwareenginePrivateCloudVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareenginePrivateCloudVcenter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter">GoogleVmwareenginePrivateCloudVcenter</a>

---



