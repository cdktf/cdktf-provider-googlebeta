# `dataGoogleComputeRouterStatus` Submodule <a name="`dataGoogleComputeRouterStatus` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRouterStatus <a name="DataGoogleComputeRouterStatus" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/data-sources/google_compute_router_status google_compute_router_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus(scope: Construct, id: string, config: DataGoogleComputeRouterStatusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig">DataGoogleComputeRouterStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig">DataGoogleComputeRouterStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeRouterStatus resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeRouterStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRouterStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRouterStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/data-sources/google_compute_router_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRouterStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutes">bestRoutes</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList">DataGoogleComputeRouterStatusBestRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutesForRouter">bestRoutesForRouter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList">DataGoogleComputeRouterStatusBestRoutesForRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bestRoutes`<sup>Required</sup> <a name="bestRoutes" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutes"></a>

```typescript
public readonly bestRoutes: DataGoogleComputeRouterStatusBestRoutesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList">DataGoogleComputeRouterStatusBestRoutesList</a>

---

##### `bestRoutesForRouter`<sup>Required</sup> <a name="bestRoutesForRouter" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutesForRouter"></a>

```typescript
public readonly bestRoutesForRouter: DataGoogleComputeRouterStatusBestRoutesForRouterList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList">DataGoogleComputeRouterStatusBestRoutesForRouterList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRouterStatusBestRoutes <a name="DataGoogleComputeRouterStatusBestRoutes" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutes: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesAsPaths <a name="DataGoogleComputeRouterStatusBestRoutesAsPaths" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPaths.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesAsPaths: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPaths = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesForRouter <a name="DataGoogleComputeRouterStatusBestRoutesForRouter" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesForRouter: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths <a name="DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesForRouterAsPaths: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesForRouterParams <a name="DataGoogleComputeRouterStatusBestRoutesForRouterParams" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParams.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesForRouterParams: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParams = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesForRouterWarnings <a name="DataGoogleComputeRouterStatusBestRoutesForRouterWarnings" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarnings.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesForRouterWarnings: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarnings = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData <a name="DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesForRouterWarningsData: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesParams <a name="DataGoogleComputeRouterStatusBestRoutesParams" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParams.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesParams: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParams = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesWarnings <a name="DataGoogleComputeRouterStatusBestRoutesWarnings" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarnings.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesWarnings: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarnings = { ... }
```


### DataGoogleComputeRouterStatusBestRoutesWarningsData <a name="DataGoogleComputeRouterStatusBestRoutesWarningsData" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsData.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusBestRoutesWarningsData: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsData = { ... }
```


### DataGoogleComputeRouterStatusConfig <a name="DataGoogleComputeRouterStatusConfig" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

const dataGoogleComputeRouterStatusConfig: dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.name">name</a></code> | <code>string</code> | Name of the router to query. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/data-sources/google_compute_router_status#id DataGoogleComputeRouterStatus#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.project">project</a></code> | <code>string</code> | Project ID of the target router. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.region">region</a></code> | <code>string</code> | Region of the target router. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the router to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/data-sources/google_compute_router_status#name DataGoogleComputeRouterStatus#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/data-sources/google_compute_router_status#id DataGoogleComputeRouterStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Project ID of the target router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/data-sources/google_compute_router_status#project DataGoogleComputeRouterStatus#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of the target router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/data-sources/google_compute_router_status#region DataGoogleComputeRouterStatus#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRouterStatusBestRoutesAsPathsList <a name="DataGoogleComputeRouterStatusBestRoutesAsPathsList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.asLists">asLists</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.pathSegmentType">pathSegmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPaths">DataGoogleComputeRouterStatusBestRoutesAsPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asLists`<sup>Required</sup> <a name="asLists" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.asLists"></a>

```typescript
public readonly asLists: number[];
```

- *Type:* number[]

---

##### `pathSegmentType`<sup>Required</sup> <a name="pathSegmentType" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.pathSegmentType"></a>

```typescript
public readonly pathSegmentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesAsPaths;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPaths">DataGoogleComputeRouterStatusBestRoutesAsPaths</a>

---


### DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList <a name="DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.asLists">asLists</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.pathSegmentType">pathSegmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths">DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asLists`<sup>Required</sup> <a name="asLists" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.asLists"></a>

```typescript
public readonly asLists: number[];
```

- *Type:* number[]

---

##### `pathSegmentType`<sup>Required</sup> <a name="pathSegmentType" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.pathSegmentType"></a>

```typescript
public readonly pathSegmentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths">DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths</a>

---


### DataGoogleComputeRouterStatusBestRoutesForRouterList <a name="DataGoogleComputeRouterStatusBestRoutesForRouterList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.asPaths">asPaths</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList">DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.destRange">destRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopGateway">nextHopGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopHub">nextHopHub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIlb">nextHopIlb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstance">nextHopInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstanceZone">nextHopInstanceZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInterRegionCost">nextHopInterRegionCost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIp">nextHopIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopMed">nextHopMed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopNetwork">nextHopNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopOrigin">nextHopOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopPeering">nextHopPeering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopVpnTunnel">nextHopVpnTunnel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList">DataGoogleComputeRouterStatusBestRoutesForRouterParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.routeStatus">routeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.routeType">routeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.warnings">warnings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList">DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter">DataGoogleComputeRouterStatusBestRoutesForRouter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asPaths`<sup>Required</sup> <a name="asPaths" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.asPaths"></a>

```typescript
public readonly asPaths: DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList">DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destRange`<sup>Required</sup> <a name="destRange" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.destRange"></a>

```typescript
public readonly destRange: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `nextHopGateway`<sup>Required</sup> <a name="nextHopGateway" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopGateway"></a>

```typescript
public readonly nextHopGateway: string;
```

- *Type:* string

---

##### `nextHopHub`<sup>Required</sup> <a name="nextHopHub" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopHub"></a>

```typescript
public readonly nextHopHub: string;
```

- *Type:* string

---

##### `nextHopIlb`<sup>Required</sup> <a name="nextHopIlb" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIlb"></a>

```typescript
public readonly nextHopIlb: string;
```

- *Type:* string

---

##### `nextHopInstance`<sup>Required</sup> <a name="nextHopInstance" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstance"></a>

```typescript
public readonly nextHopInstance: string;
```

- *Type:* string

---

##### `nextHopInstanceZone`<sup>Required</sup> <a name="nextHopInstanceZone" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstanceZone"></a>

```typescript
public readonly nextHopInstanceZone: string;
```

- *Type:* string

---

##### `nextHopInterRegionCost`<sup>Required</sup> <a name="nextHopInterRegionCost" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInterRegionCost"></a>

```typescript
public readonly nextHopInterRegionCost: string;
```

- *Type:* string

---

##### `nextHopIp`<sup>Required</sup> <a name="nextHopIp" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIp"></a>

```typescript
public readonly nextHopIp: string;
```

- *Type:* string

---

##### `nextHopMed`<sup>Required</sup> <a name="nextHopMed" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopMed"></a>

```typescript
public readonly nextHopMed: string;
```

- *Type:* string

---

##### `nextHopNetwork`<sup>Required</sup> <a name="nextHopNetwork" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopNetwork"></a>

```typescript
public readonly nextHopNetwork: string;
```

- *Type:* string

---

##### `nextHopOrigin`<sup>Required</sup> <a name="nextHopOrigin" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopOrigin"></a>

```typescript
public readonly nextHopOrigin: string;
```

- *Type:* string

---

##### `nextHopPeering`<sup>Required</sup> <a name="nextHopPeering" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopPeering"></a>

```typescript
public readonly nextHopPeering: string;
```

- *Type:* string

---

##### `nextHopVpnTunnel`<sup>Required</sup> <a name="nextHopVpnTunnel" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopVpnTunnel"></a>

```typescript
public readonly nextHopVpnTunnel: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.params"></a>

```typescript
public readonly params: DataGoogleComputeRouterStatusBestRoutesForRouterParamsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList">DataGoogleComputeRouterStatusBestRoutesForRouterParamsList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `routeStatus`<sup>Required</sup> <a name="routeStatus" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.routeStatus"></a>

```typescript
public readonly routeStatus: string;
```

- *Type:* string

---

##### `routeType`<sup>Required</sup> <a name="routeType" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.routeType"></a>

```typescript
public readonly routeType: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.warnings"></a>

```typescript
public readonly warnings: DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList">DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesForRouter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter">DataGoogleComputeRouterStatusBestRoutesForRouter</a>

---


### DataGoogleComputeRouterStatusBestRoutesForRouterParamsList <a name="DataGoogleComputeRouterStatusBestRoutesForRouterParamsList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParams">DataGoogleComputeRouterStatusBestRoutesForRouterParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesForRouterParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterParams">DataGoogleComputeRouterStatusBestRoutesForRouterParams</a>

---


### DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList <a name="DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData">DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData">DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData</a>

---


### DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList <a name="DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.data">data</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList">DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarnings">DataGoogleComputeRouterStatusBestRoutesForRouterWarnings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.data"></a>

```typescript
public readonly data: DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList">DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesForRouterWarnings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterWarnings">DataGoogleComputeRouterStatusBestRoutesForRouterWarnings</a>

---


### DataGoogleComputeRouterStatusBestRoutesList <a name="DataGoogleComputeRouterStatusBestRoutesList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.asPaths">asPaths</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList">DataGoogleComputeRouterStatusBestRoutesAsPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.destRange">destRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopGateway">nextHopGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopHub">nextHopHub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIlb">nextHopIlb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstance">nextHopInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstanceZone">nextHopInstanceZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInterRegionCost">nextHopInterRegionCost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIp">nextHopIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopMed">nextHopMed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopNetwork">nextHopNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopOrigin">nextHopOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopPeering">nextHopPeering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopVpnTunnel">nextHopVpnTunnel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList">DataGoogleComputeRouterStatusBestRoutesParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.routeStatus">routeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.routeType">routeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.warnings">warnings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList">DataGoogleComputeRouterStatusBestRoutesWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes">DataGoogleComputeRouterStatusBestRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asPaths`<sup>Required</sup> <a name="asPaths" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.asPaths"></a>

```typescript
public readonly asPaths: DataGoogleComputeRouterStatusBestRoutesAsPathsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesAsPathsList">DataGoogleComputeRouterStatusBestRoutesAsPathsList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destRange`<sup>Required</sup> <a name="destRange" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.destRange"></a>

```typescript
public readonly destRange: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `nextHopGateway`<sup>Required</sup> <a name="nextHopGateway" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopGateway"></a>

```typescript
public readonly nextHopGateway: string;
```

- *Type:* string

---

##### `nextHopHub`<sup>Required</sup> <a name="nextHopHub" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopHub"></a>

```typescript
public readonly nextHopHub: string;
```

- *Type:* string

---

##### `nextHopIlb`<sup>Required</sup> <a name="nextHopIlb" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIlb"></a>

```typescript
public readonly nextHopIlb: string;
```

- *Type:* string

---

##### `nextHopInstance`<sup>Required</sup> <a name="nextHopInstance" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstance"></a>

```typescript
public readonly nextHopInstance: string;
```

- *Type:* string

---

##### `nextHopInstanceZone`<sup>Required</sup> <a name="nextHopInstanceZone" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstanceZone"></a>

```typescript
public readonly nextHopInstanceZone: string;
```

- *Type:* string

---

##### `nextHopInterRegionCost`<sup>Required</sup> <a name="nextHopInterRegionCost" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInterRegionCost"></a>

```typescript
public readonly nextHopInterRegionCost: string;
```

- *Type:* string

---

##### `nextHopIp`<sup>Required</sup> <a name="nextHopIp" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIp"></a>

```typescript
public readonly nextHopIp: string;
```

- *Type:* string

---

##### `nextHopMed`<sup>Required</sup> <a name="nextHopMed" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopMed"></a>

```typescript
public readonly nextHopMed: string;
```

- *Type:* string

---

##### `nextHopNetwork`<sup>Required</sup> <a name="nextHopNetwork" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopNetwork"></a>

```typescript
public readonly nextHopNetwork: string;
```

- *Type:* string

---

##### `nextHopOrigin`<sup>Required</sup> <a name="nextHopOrigin" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopOrigin"></a>

```typescript
public readonly nextHopOrigin: string;
```

- *Type:* string

---

##### `nextHopPeering`<sup>Required</sup> <a name="nextHopPeering" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopPeering"></a>

```typescript
public readonly nextHopPeering: string;
```

- *Type:* string

---

##### `nextHopVpnTunnel`<sup>Required</sup> <a name="nextHopVpnTunnel" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopVpnTunnel"></a>

```typescript
public readonly nextHopVpnTunnel: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.params"></a>

```typescript
public readonly params: DataGoogleComputeRouterStatusBestRoutesParamsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList">DataGoogleComputeRouterStatusBestRoutesParamsList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `routeStatus`<sup>Required</sup> <a name="routeStatus" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.routeStatus"></a>

```typescript
public readonly routeStatus: string;
```

- *Type:* string

---

##### `routeType`<sup>Required</sup> <a name="routeType" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.routeType"></a>

```typescript
public readonly routeType: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.warnings"></a>

```typescript
public readonly warnings: DataGoogleComputeRouterStatusBestRoutesWarningsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList">DataGoogleComputeRouterStatusBestRoutesWarningsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes">DataGoogleComputeRouterStatusBestRoutes</a>

---


### DataGoogleComputeRouterStatusBestRoutesParamsList <a name="DataGoogleComputeRouterStatusBestRoutesParamsList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesParamsOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesParamsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParams">DataGoogleComputeRouterStatusBestRoutesParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesParams">DataGoogleComputeRouterStatusBestRoutesParams</a>

---


### DataGoogleComputeRouterStatusBestRoutesWarningsDataList <a name="DataGoogleComputeRouterStatusBestRoutesWarningsDataList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsData">DataGoogleComputeRouterStatusBestRoutesWarningsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesWarningsData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsData">DataGoogleComputeRouterStatusBestRoutesWarningsData</a>

---


### DataGoogleComputeRouterStatusBestRoutesWarningsList <a name="DataGoogleComputeRouterStatusBestRoutesWarningsList" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRouterStatus } from '@cdktf/provider-google-beta'

new dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.data">data</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList">DataGoogleComputeRouterStatusBestRoutesWarningsDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarnings">DataGoogleComputeRouterStatusBestRoutesWarnings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.data"></a>

```typescript
public readonly data: DataGoogleComputeRouterStatusBestRoutesWarningsDataList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsDataList">DataGoogleComputeRouterStatusBestRoutesWarningsDataList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRouterStatusBestRoutesWarnings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesWarnings">DataGoogleComputeRouterStatusBestRoutesWarnings</a>

---



