# `dataGoogleBeyondcorpAppConnection` Submodule <a name="`dataGoogleBeyondcorpAppConnection` Submodule" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpAppConnection <a name="DataGoogleBeyondcorpAppConnection" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_beyondcorp_app_connection google_beyondcorp_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

new dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection(scope: Construct, id: string, config: DataGoogleBeyondcorpAppConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig">DataGoogleBeyondcorpAppConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig">DataGoogleBeyondcorpAppConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBeyondcorpAppConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.generateConfigForImport"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleBeyondcorpAppConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBeyondcorpAppConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBeyondcorpAppConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_beyondcorp_app_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpAppConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.applicationEndpoint">applicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList">DataGoogleBeyondcorpAppConnectionApplicationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.connectors">connectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList">DataGoogleBeyondcorpAppConnectionGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applicationEndpoint`<sup>Required</sup> <a name="applicationEndpoint" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.applicationEndpoint"></a>

```typescript
public readonly applicationEndpoint: DataGoogleBeyondcorpAppConnectionApplicationEndpointList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList">DataGoogleBeyondcorpAppConnectionApplicationEndpointList</a>

---

##### `connectors`<sup>Required</sup> <a name="connectors" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.connectors"></a>

```typescript
public readonly connectors: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.gateway"></a>

```typescript
public readonly gateway: DataGoogleBeyondcorpAppConnectionGatewayList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList">DataGoogleBeyondcorpAppConnectionGatewayList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpAppConnectionApplicationEndpoint <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpoint" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

const dataGoogleBeyondcorpAppConnectionApplicationEndpoint: dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint = { ... }
```


### DataGoogleBeyondcorpAppConnectionConfig <a name="DataGoogleBeyondcorpAppConnectionConfig" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

const dataGoogleBeyondcorpAppConnectionConfig: dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.name">name</a></code> | <code>string</code> | ID of the AppConnection. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_beyondcorp_app_connection#id DataGoogleBeyondcorpAppConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_beyondcorp_app_connection#project DataGoogleBeyondcorpAppConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.region">region</a></code> | <code>string</code> | The region of the AppConnection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

ID of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_beyondcorp_app_connection#name DataGoogleBeyondcorpAppConnection#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_beyondcorp_app_connection#id DataGoogleBeyondcorpAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_beyondcorp_app_connection#project DataGoogleBeyondcorpAppConnection#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_beyondcorp_app_connection#region DataGoogleBeyondcorpAppConnection#region}

---

### DataGoogleBeyondcorpAppConnectionGateway <a name="DataGoogleBeyondcorpAppConnectionGateway" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

const dataGoogleBeyondcorpAppConnectionGateway: dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpAppConnectionApplicationEndpointList <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpointList" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

new dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

new dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint">DataGoogleBeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpAppConnectionApplicationEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint">DataGoogleBeyondcorpAppConnectionApplicationEndpoint</a>

---


### DataGoogleBeyondcorpAppConnectionGatewayList <a name="DataGoogleBeyondcorpAppConnectionGatewayList" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

new dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpAppConnectionGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpAppConnectionGatewayOutputReference <a name="DataGoogleBeyondcorpAppConnectionGatewayOutputReference" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnection } from '@cdktf/provider-google-beta'

new dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGateway">appGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.ingressPort">ingressPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway">DataGoogleBeyondcorpAppConnectionGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appGateway`<sup>Required</sup> <a name="appGateway" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGateway"></a>

```typescript
public readonly appGateway: string;
```

- *Type:* string

---

##### `ingressPort`<sup>Required</sup> <a name="ingressPort" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.ingressPort"></a>

```typescript
public readonly ingressPort: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpAppConnectionGateway;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway">DataGoogleBeyondcorpAppConnectionGateway</a>

---



