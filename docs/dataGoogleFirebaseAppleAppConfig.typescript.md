# `dataGoogleFirebaseAppleAppConfig` Submodule <a name="`dataGoogleFirebaseAppleAppConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseAppleAppConfigA <a name="DataGoogleFirebaseAppleAppConfigA" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_apple_app_config google_firebase_apple_app_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.Initializer"></a>

```typescript
import { dataGoogleFirebaseAppleAppConfig } from '@cdktf/provider-google-beta'

new dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA(scope: Construct, id: string, config: DataGoogleFirebaseAppleAppConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig">DataGoogleFirebaseAppleAppConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig">DataGoogleFirebaseAppleAppConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFirebaseAppleAppConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isConstruct"></a>

```typescript
import { dataGoogleFirebaseAppleAppConfig } from '@cdktf/provider-google-beta'

dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isTerraformElement"></a>

```typescript
import { dataGoogleFirebaseAppleAppConfig } from '@cdktf/provider-google-beta'

dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isTerraformDataSource"></a>

```typescript
import { dataGoogleFirebaseAppleAppConfig } from '@cdktf/provider-google-beta'

dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.generateConfigForImport"></a>

```typescript
import { dataGoogleFirebaseAppleAppConfig } from '@cdktf/provider-google-beta'

dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleFirebaseAppleAppConfigA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleFirebaseAppleAppConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleFirebaseAppleAppConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_apple_app_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseAppleAppConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.configFileContents">configFileContents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.configFilename">configFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configFileContents`<sup>Required</sup> <a name="configFileContents" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.configFileContents"></a>

```typescript
public readonly configFileContents: string;
```

- *Type:* string

---

##### `configFilename`<sup>Required</sup> <a name="configFilename" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.configFilename"></a>

```typescript
public readonly configFilename: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseAppleAppConfigAConfig <a name="DataGoogleFirebaseAppleAppConfigAConfig" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.Initializer"></a>

```typescript
import { dataGoogleFirebaseAppleAppConfig } from '@cdktf/provider-google-beta'

const dataGoogleFirebaseAppleAppConfigAConfig: dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.appId">appId</a></code> | <code>string</code> | The id of the Firebase iOS App. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.project">project</a></code> | <code>string</code> | The project id of the Firebase iOS App. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The id of the Firebase iOS App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_apple_app_config#app_id DataGoogleFirebaseAppleAppConfigA#app_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleFirebaseAppleAppConfig.DataGoogleFirebaseAppleAppConfigAConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project id of the Firebase iOS App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_apple_app_config#project DataGoogleFirebaseAppleAppConfigA#project}

---



