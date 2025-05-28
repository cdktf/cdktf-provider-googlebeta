# `dataGoogleIamWorkloadIdentityPool` Submodule <a name="`dataGoogleIamWorkloadIdentityPool` Submodule" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPool <a name="DataGoogleIamWorkloadIdentityPool" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig">DataGoogleIamWorkloadIdentityPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig">DataGoogleIamWorkloadIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamWorkloadIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig">inlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineTrustConfig">inlineTrustConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `inlineCertificateIssuanceConfig`<sup>Required</sup> <a name="inlineCertificateIssuanceConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig"></a>

```typescript
public readonly inlineCertificateIssuanceConfig: DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList</a>

---

##### `inlineTrustConfig`<sup>Required</sup> <a name="inlineTrustConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineTrustConfig"></a>

```typescript
public readonly inlineTrustConfig: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolConfig <a name="DataGoogleIamWorkloadIdentityPoolConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolConfig: dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#workload_identity_pool_id DataGoogleIamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}.

---

### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig: dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig = { ... }
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfig <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolInlineTrustConfig: dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig = { ... }
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles: dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles = { ... }
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors: dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools">caPools</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage">rotationWindowPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caPools`<sup>Required</sup> <a name="caPools" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools"></a>

```typescript
public readonly caPools: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `rotationWindowPercentage`<sup>Required</sup> <a name="rotationWindowPercentage" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage"></a>

```typescript
public readonly rotationWindowPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors">trustAnchors</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain">trustDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors"></a>

```typescript
public readonly trustAnchors: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a>

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain"></a>

```typescript
public readonly trustDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPool } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles">additionalTrustBundles</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig">DataGoogleIamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalTrustBundles`<sup>Required</sup> <a name="additionalTrustBundles" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles"></a>

```typescript
public readonly additionalTrustBundles: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolInlineTrustConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig">DataGoogleIamWorkloadIdentityPoolInlineTrustConfig</a>

---



