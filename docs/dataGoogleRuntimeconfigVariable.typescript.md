# `dataGoogleRuntimeconfigVariable` Submodule <a name="`dataGoogleRuntimeconfigVariable` Submodule" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleRuntimeconfigVariable <a name="DataGoogleRuntimeconfigVariable" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_runtimeconfig_variable google_runtimeconfig_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer"></a>

```typescript
import { dataGoogleRuntimeconfigVariable } from '@cdktf/provider-google-beta'

new dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable(scope: Construct, id: string, config: DataGoogleRuntimeconfigVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig">DataGoogleRuntimeconfigVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig">DataGoogleRuntimeconfigVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleRuntimeconfigVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isConstruct"></a>

```typescript
import { dataGoogleRuntimeconfigVariable } from '@cdktf/provider-google-beta'

dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformElement"></a>

```typescript
import { dataGoogleRuntimeconfigVariable } from '@cdktf/provider-google-beta'

dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformDataSource"></a>

```typescript
import { dataGoogleRuntimeconfigVariable } from '@cdktf/provider-google-beta'

dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport"></a>

```typescript
import { dataGoogleRuntimeconfigVariable } from '@cdktf/provider-google-beta'

dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleRuntimeconfigVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleRuntimeconfigVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleRuntimeconfigVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_runtimeconfig_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleRuntimeconfigVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleRuntimeconfigVariableConfig <a name="DataGoogleRuntimeconfigVariableConfig" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.Initializer"></a>

```typescript
import { dataGoogleRuntimeconfigVariable } from '@cdktf/provider-google-beta'

const dataGoogleRuntimeconfigVariableConfig: dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.name">name</a></code> | <code>string</code> | The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname"). |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.parent">parent</a></code> | <code>string</code> | The name of the RuntimeConfig resource containing this variable. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_runtimeconfig_variable#id DataGoogleRuntimeconfigVariable#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_runtimeconfig_variable#name DataGoogleRuntimeconfigVariable#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The name of the RuntimeConfig resource containing this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_runtimeconfig_variable#parent DataGoogleRuntimeconfigVariable#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_runtimeconfig_variable#id DataGoogleRuntimeconfigVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_runtimeconfig_variable#project DataGoogleRuntimeconfigVariable#project}

---



