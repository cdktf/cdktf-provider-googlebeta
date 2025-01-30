# `googleApihubApiHubInstance` Submodule <a name="`googleApihubApiHubInstance` Submodule" id="@cdktf/provider-google-beta.googleApihubApiHubInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubApiHubInstance <a name="GoogleApihubApiHubInstance" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance google_apihub_api_hub_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

new googleApihubApiHubInstance.GoogleApihubApiHubInstance(scope: Construct, id: string, config: GoogleApihubApiHubInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig">GoogleApihubApiHubInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig">GoogleApihubApiHubInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetApiHubInstanceId">resetApiHubInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig"></a>

```typescript
public putConfig(value: GoogleApihubApiHubInstanceConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApihubApiHubInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>

---

##### `resetApiHubInstanceId` <a name="resetApiHubInstanceId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetApiHubInstanceId"></a>

```typescript
public resetApiHubInstanceId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApihubApiHubInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isConstruct"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

googleApihubApiHubInstance.GoogleApihubApiHubInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformElement"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformResource"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleApihubApiHubInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApihubApiHubInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApihubApiHubInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubApiHubInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference">GoogleApihubApiHubInstanceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference">GoogleApihubApiHubInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.apiHubInstanceIdInput">apiHubInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.apiHubInstanceId">apiHubInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.config"></a>

```typescript
public readonly config: GoogleApihubApiHubInstanceConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference">GoogleApihubApiHubInstanceConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApihubApiHubInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference">GoogleApihubApiHubInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `apiHubInstanceIdInput`<sup>Optional</sup> <a name="apiHubInstanceIdInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.apiHubInstanceIdInput"></a>

```typescript
public readonly apiHubInstanceIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.configInput"></a>

```typescript
public readonly configInput: GoogleApihubApiHubInstanceConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApihubApiHubInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>

---

##### `apiHubInstanceId`<sup>Required</sup> <a name="apiHubInstanceId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.apiHubInstanceId"></a>

```typescript
public readonly apiHubInstanceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubApiHubInstanceConfig <a name="GoogleApihubApiHubInstanceConfig" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.Initializer"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

const googleApihubApiHubInstanceConfig: googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.apiHubInstanceId">apiHubInstanceId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the ApiHub instance. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#id GoogleApihubApiHubInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#project GoogleApihubApiHubInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.config"></a>

```typescript
public readonly config: GoogleApihubApiHubInstanceConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#config GoogleApihubApiHubInstance#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#location GoogleApihubApiHubInstance#location}

---

##### `apiHubInstanceId`<sup>Optional</sup> <a name="apiHubInstanceId" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.apiHubInstanceId"></a>

```typescript
public readonly apiHubInstanceId: string;
```

- *Type:* string

Optional.

Identifier to assign to the Api Hub instance. Must be unique within
scope of the parent resource. If the field is not provided,
system generated id will be used.

This value should be 4-40 characters, and valid characters
are '/a-z[0-9]-_/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#api_hub_instance_id GoogleApihubApiHubInstance#api_hub_instance_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the ApiHub instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#description GoogleApihubApiHubInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#id GoogleApihubApiHubInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#labels GoogleApihubApiHubInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#project GoogleApihubApiHubInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApihubApiHubInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#timeouts GoogleApihubApiHubInstance#timeouts}

---

### GoogleApihubApiHubInstanceConfigA <a name="GoogleApihubApiHubInstanceConfigA" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.Initializer"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

const googleApihubApiHubInstanceConfigA: googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.cmekKeyName">cmekKeyName</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.disableSearch">disableSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. If true, the search will be disabled for the instance. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.encryptionType">encryptionType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.vertexLocation">vertexLocation</a></code> | <code>string</code> | Optional. The name of the Vertex AI location where the data store is stored. |

---

##### `cmekKeyName`<sup>Optional</sup> <a name="cmekKeyName" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.cmekKeyName"></a>

```typescript
public readonly cmekKeyName: string;
```

- *Type:* string

Optional.

The Customer Managed Encryption Key (CMEK) used for data encryption.
The CMEK name should follow the format of
'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)',
where the location must match the instance location.
If the CMEK is not provided, a GMEK will be created for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#cmek_key_name GoogleApihubApiHubInstance#cmek_key_name}

---

##### `disableSearch`<sup>Optional</sup> <a name="disableSearch" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.disableSearch"></a>

```typescript
public readonly disableSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. If true, the search will be disabled for the instance. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#disable_search GoogleApihubApiHubInstance#disable_search}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Optional.

Encryption type for the region. If the encryption type is CMEK, the
cmek_key_name must be provided. If no encryption type is provided,
GMEK will be used.
Possible values:
ENCRYPTION_TYPE_UNSPECIFIED
GMEK
CMEK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#encryption_type GoogleApihubApiHubInstance#encryption_type}

---

##### `vertexLocation`<sup>Optional</sup> <a name="vertexLocation" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.vertexLocation"></a>

```typescript
public readonly vertexLocation: string;
```

- *Type:* string

Optional. The name of the Vertex AI location where the data store is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#vertex_location GoogleApihubApiHubInstance#vertex_location}

---

### GoogleApihubApiHubInstanceTimeouts <a name="GoogleApihubApiHubInstanceTimeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.Initializer"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

const googleApihubApiHubInstanceTimeouts: googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#create GoogleApihubApiHubInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#delete GoogleApihubApiHubInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#update GoogleApihubApiHubInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#create GoogleApihubApiHubInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#delete GoogleApihubApiHubInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_apihub_api_hub_instance#update GoogleApihubApiHubInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubApiHubInstanceConfigAOutputReference <a name="GoogleApihubApiHubInstanceConfigAOutputReference" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

new googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName">resetCmekKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetDisableSearch">resetDisableSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetVertexLocation">resetVertexLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmekKeyName` <a name="resetCmekKeyName" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName"></a>

```typescript
public resetCmekKeyName(): void
```

##### `resetDisableSearch` <a name="resetDisableSearch" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetDisableSearch"></a>

```typescript
public resetDisableSearch(): void
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetVertexLocation` <a name="resetVertexLocation" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetVertexLocation"></a>

```typescript
public resetVertexLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput">cmekKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput">disableSearchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput">vertexLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName">cmekKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.disableSearch">disableSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.vertexLocation">vertexLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmekKeyNameInput`<sup>Optional</sup> <a name="cmekKeyNameInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput"></a>

```typescript
public readonly cmekKeyNameInput: string;
```

- *Type:* string

---

##### `disableSearchInput`<sup>Optional</sup> <a name="disableSearchInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput"></a>

```typescript
public readonly disableSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `vertexLocationInput`<sup>Optional</sup> <a name="vertexLocationInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput"></a>

```typescript
public readonly vertexLocationInput: string;
```

- *Type:* string

---

##### `cmekKeyName`<sup>Required</sup> <a name="cmekKeyName" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName"></a>

```typescript
public readonly cmekKeyName: string;
```

- *Type:* string

---

##### `disableSearch`<sup>Required</sup> <a name="disableSearch" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.disableSearch"></a>

```typescript
public readonly disableSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `vertexLocation`<sup>Required</sup> <a name="vertexLocation" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.vertexLocation"></a>

```typescript
public readonly vertexLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubApiHubInstanceConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a>

---


### GoogleApihubApiHubInstanceTimeoutsOutputReference <a name="GoogleApihubApiHubInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApihubApiHubInstance } from '@cdktf/provider-google-beta'

new googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubApiHubInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>

---



