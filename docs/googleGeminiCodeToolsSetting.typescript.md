# `googleGeminiCodeToolsSetting` Submodule <a name="`googleGeminiCodeToolsSetting` Submodule" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiCodeToolsSetting <a name="GoogleGeminiCodeToolsSetting" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting google_gemini_code_tools_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

new googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting(scope: Construct, id: string, config: GoogleGeminiCodeToolsSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig">GoogleGeminiCodeToolsSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig">GoogleGeminiCodeToolsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool">putEnabledTool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnabledTool` <a name="putEnabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool"></a>

```typescript
public putEnabledTool(value: IResolvable | GoogleGeminiCodeToolsSettingEnabledTool[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGeminiCodeToolsSettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiCodeToolsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiCodeToolsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiCodeToolsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledTool">enabledTool</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList">GoogleGeminiCodeToolsSettingEnabledToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference">GoogleGeminiCodeToolsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingIdInput">codeToolsSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledToolInput">enabledToolInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingId">codeToolsSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `enabledTool`<sup>Required</sup> <a name="enabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledTool"></a>

```typescript
public readonly enabledTool: GoogleGeminiCodeToolsSettingEnabledToolList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList">GoogleGeminiCodeToolsSettingEnabledToolList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGeminiCodeToolsSettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference">GoogleGeminiCodeToolsSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `codeToolsSettingIdInput`<sup>Optional</sup> <a name="codeToolsSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingIdInput"></a>

```typescript
public readonly codeToolsSettingIdInput: string;
```

- *Type:* string

---

##### `enabledToolInput`<sup>Optional</sup> <a name="enabledToolInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledToolInput"></a>

```typescript
public readonly enabledToolInput: IResolvable | GoogleGeminiCodeToolsSettingEnabledTool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGeminiCodeToolsSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingId"></a>

```typescript
public readonly codeToolsSettingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiCodeToolsSettingConfig <a name="GoogleGeminiCodeToolsSettingConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

const googleGeminiCodeToolsSettingConfig: googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.codeToolsSettingId">codeToolsSettingId</a></code> | <code>string</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.enabledTool">enabledTool</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>[]</code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.codeToolsSettingId"></a>

```typescript
public readonly codeToolsSettingId: string;
```

- *Type:* string

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#code_tools_setting_id GoogleGeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabledTool`<sup>Required</sup> <a name="enabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.enabledTool"></a>

```typescript
public readonly enabledTool: IResolvable | GoogleGeminiCodeToolsSettingEnabledTool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>[]

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#enabled_tool GoogleGeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#labels GoogleGeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#location GoogleGeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGeminiCodeToolsSettingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#timeouts GoogleGeminiCodeToolsSetting#timeouts}

---

### GoogleGeminiCodeToolsSettingEnabledTool <a name="GoogleGeminiCodeToolsSettingEnabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

const googleGeminiCodeToolsSettingEnabledTool: googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.handle">handle</a></code> | <code>string</code> | Handle used to invoke the tool. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.tool">tool</a></code> | <code>string</code> | Link to the Tool. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.accountConnector">accountConnector</a></code> | <code>string</code> | Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.config">config</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>[]</code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.uriOverride">uriOverride</a></code> | <code>string</code> | Overridden URI, if allowed by Tool. |

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

Handle used to invoke the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#handle GoogleGeminiCodeToolsSetting#handle}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

Link to the Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#tool GoogleGeminiCodeToolsSetting#tool}

---

##### `accountConnector`<sup>Optional</sup> <a name="accountConnector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.accountConnector"></a>

```typescript
public readonly accountConnector: string;
```

- *Type:* string

Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#account_connector GoogleGeminiCodeToolsSetting#account_connector}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.config"></a>

```typescript
public readonly config: IResolvable | GoogleGeminiCodeToolsSettingEnabledToolConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>[]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#config GoogleGeminiCodeToolsSetting#config}

---

##### `uriOverride`<sup>Optional</sup> <a name="uriOverride" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.uriOverride"></a>

```typescript
public readonly uriOverride: string;
```

- *Type:* string

Overridden URI, if allowed by Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#uri_override GoogleGeminiCodeToolsSetting#uri_override}

---

### GoogleGeminiCodeToolsSettingEnabledToolConfig <a name="GoogleGeminiCodeToolsSettingEnabledToolConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

const googleGeminiCodeToolsSettingEnabledToolConfig: googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.key">key</a></code> | <code>string</code> | Key of the configuration item. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.value">value</a></code> | <code>string</code> | Value of the configuration item. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#key GoogleGeminiCodeToolsSetting#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#value GoogleGeminiCodeToolsSetting#value}

---

### GoogleGeminiCodeToolsSettingTimeouts <a name="GoogleGeminiCodeToolsSettingTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

const googleGeminiCodeToolsSettingTimeouts: googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#create GoogleGeminiCodeToolsSetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#delete GoogleGeminiCodeToolsSetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#update GoogleGeminiCodeToolsSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#create GoogleGeminiCodeToolsSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#delete GoogleGeminiCodeToolsSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_gemini_code_tools_setting#update GoogleGeminiCodeToolsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiCodeToolsSettingEnabledToolConfigList <a name="GoogleGeminiCodeToolsSettingEnabledToolConfigList" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

new googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get"></a>

```typescript
public get(index: number): GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiCodeToolsSettingEnabledToolConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>[]

---


### GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference <a name="GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

new googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiCodeToolsSettingEnabledToolConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>

---


### GoogleGeminiCodeToolsSettingEnabledToolList <a name="GoogleGeminiCodeToolsSettingEnabledToolList" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

new googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get"></a>

```typescript
public get(index: number): GoogleGeminiCodeToolsSettingEnabledToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiCodeToolsSettingEnabledTool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>[]

---


### GoogleGeminiCodeToolsSettingEnabledToolOutputReference <a name="GoogleGeminiCodeToolsSettingEnabledToolOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

new googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector">resetAccountConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride">resetUriOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig"></a>

```typescript
public putConfig(value: IResolvable | GoogleGeminiCodeToolsSettingEnabledToolConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>[]

---

##### `resetAccountConnector` <a name="resetAccountConnector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector"></a>

```typescript
public resetAccountConnector(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetUriOverride` <a name="resetUriOverride" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride"></a>

```typescript
public resetUriOverride(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList">GoogleGeminiCodeToolsSettingEnabledToolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput">accountConnectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput">handleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput">uriOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector">accountConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handle">handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride">uriOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.config"></a>

```typescript
public readonly config: GoogleGeminiCodeToolsSettingEnabledToolConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList">GoogleGeminiCodeToolsSettingEnabledToolConfigList</a>

---

##### `accountConnectorInput`<sup>Optional</sup> <a name="accountConnectorInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput"></a>

```typescript
public readonly accountConnectorInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | GoogleGeminiCodeToolsSettingEnabledToolConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>[]

---

##### `handleInput`<sup>Optional</sup> <a name="handleInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput"></a>

```typescript
public readonly handleInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `uriOverrideInput`<sup>Optional</sup> <a name="uriOverrideInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput"></a>

```typescript
public readonly uriOverrideInput: string;
```

- *Type:* string

---

##### `accountConnector`<sup>Required</sup> <a name="accountConnector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector"></a>

```typescript
public readonly accountConnector: string;
```

- *Type:* string

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `uriOverride`<sup>Required</sup> <a name="uriOverride" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride"></a>

```typescript
public readonly uriOverride: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiCodeToolsSettingEnabledTool;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>

---


### GoogleGeminiCodeToolsSettingTimeoutsOutputReference <a name="GoogleGeminiCodeToolsSettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGeminiCodeToolsSetting } from '@cdktf/provider-google-beta'

new googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiCodeToolsSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

---



