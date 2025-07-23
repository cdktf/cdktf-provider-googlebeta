# `googleApihubPlugin` Submodule <a name="`googleApihubPlugin` Submodule" id="@cdktf/provider-google-beta.googleApihubPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubPlugin <a name="GoogleApihubPlugin" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin google_apihub_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPlugin(scope: Construct, id: string, config: GoogleApihubPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig">GoogleApihubPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig">GoogleApihubPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putActionsConfig">putActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putConfigTemplate">putConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putDocumentation">putDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putHostingService">putHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetActionsConfig">resetActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetConfigTemplate">resetConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetHostingService">resetHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetPluginCategory">resetPluginCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionsConfig` <a name="putActionsConfig" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putActionsConfig"></a>

```typescript
public putActionsConfig(value: IResolvable | GoogleApihubPluginActionsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putActionsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>[]

---

##### `putConfigTemplate` <a name="putConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putConfigTemplate"></a>

```typescript
public putConfigTemplate(value: GoogleApihubPluginConfigTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putConfigTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a>

---

##### `putDocumentation` <a name="putDocumentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putDocumentation"></a>

```typescript
public putDocumentation(value: GoogleApihubPluginDocumentation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putDocumentation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a>

---

##### `putHostingService` <a name="putHostingService" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putHostingService"></a>

```typescript
public putHostingService(value: GoogleApihubPluginHostingService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putHostingService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApihubPluginTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a>

---

##### `resetActionsConfig` <a name="resetActionsConfig" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetActionsConfig"></a>

```typescript
public resetActionsConfig(): void
```

##### `resetConfigTemplate` <a name="resetConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetConfigTemplate"></a>

```typescript
public resetConfigTemplate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetDocumentation"></a>

```typescript
public resetDocumentation(): void
```

##### `resetHostingService` <a name="resetHostingService" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetHostingService"></a>

```typescript
public resetHostingService(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPluginCategory` <a name="resetPluginCategory" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetPluginCategory"></a>

```typescript
public resetPluginCategory(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApihubPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isConstruct"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

googleApihubPlugin.GoogleApihubPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformElement"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

googleApihubPlugin.GoogleApihubPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformResource"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

googleApihubPlugin.GoogleApihubPlugin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleApihubPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApihubPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApihubPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.actionsConfig">actionsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList">GoogleApihubPluginActionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.configTemplate">configTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference">GoogleApihubPluginConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference">GoogleApihubPluginDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.hostingService">hostingService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference">GoogleApihubPluginHostingServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.ownershipType">ownershipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference">GoogleApihubPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.actionsConfigInput">actionsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.configTemplateInput">configTemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.documentationInput">documentationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.hostingServiceInput">hostingServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginCategoryInput">pluginCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginIdInput">pluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginCategory">pluginCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionsConfig`<sup>Required</sup> <a name="actionsConfig" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.actionsConfig"></a>

```typescript
public readonly actionsConfig: GoogleApihubPluginActionsConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList">GoogleApihubPluginActionsConfigList</a>

---

##### `configTemplate`<sup>Required</sup> <a name="configTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.configTemplate"></a>

```typescript
public readonly configTemplate: GoogleApihubPluginConfigTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference">GoogleApihubPluginConfigTemplateOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.documentation"></a>

```typescript
public readonly documentation: GoogleApihubPluginDocumentationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference">GoogleApihubPluginDocumentationOutputReference</a>

---

##### `hostingService`<sup>Required</sup> <a name="hostingService" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.hostingService"></a>

```typescript
public readonly hostingService: GoogleApihubPluginHostingServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference">GoogleApihubPluginHostingServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownershipType`<sup>Required</sup> <a name="ownershipType" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.ownershipType"></a>

```typescript
public readonly ownershipType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApihubPluginTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference">GoogleApihubPluginTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionsConfigInput`<sup>Optional</sup> <a name="actionsConfigInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.actionsConfigInput"></a>

```typescript
public readonly actionsConfigInput: IResolvable | GoogleApihubPluginActionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>[]

---

##### `configTemplateInput`<sup>Optional</sup> <a name="configTemplateInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.configTemplateInput"></a>

```typescript
public readonly configTemplateInput: GoogleApihubPluginConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.documentationInput"></a>

```typescript
public readonly documentationInput: GoogleApihubPluginDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a>

---

##### `hostingServiceInput`<sup>Optional</sup> <a name="hostingServiceInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.hostingServiceInput"></a>

```typescript
public readonly hostingServiceInput: GoogleApihubPluginHostingService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `pluginCategoryInput`<sup>Optional</sup> <a name="pluginCategoryInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginCategoryInput"></a>

```typescript
public readonly pluginCategoryInput: string;
```

- *Type:* string

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApihubPluginTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pluginCategory`<sup>Required</sup> <a name="pluginCategory" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginCategory"></a>

```typescript
public readonly pluginCategory: string;
```

- *Type:* string

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubPluginActionsConfig <a name="GoogleApihubPluginActionsConfig" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginActionsConfig: googleApihubPlugin.GoogleApihubPluginActionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.description">description</a></code> | <code>string</code> | The description of the operation performed by the action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.id">id</a></code> | <code>string</code> | The id of the action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.triggerMode">triggerMode</a></code> | <code>string</code> | The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the operation performed by the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#trigger_mode GoogleApihubPlugin#trigger_mode}

---

### GoogleApihubPluginConfig <a name="GoogleApihubPluginConfig" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginConfig: googleApihubPlugin.GoogleApihubPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the plugin. Max length is 50 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.pluginId">pluginId</a></code> | <code>string</code> | The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.actionsConfig">actionsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>[]</code> | actions_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.configTemplate">configTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a></code> | config_template block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.description">description</a></code> | <code>string</code> | The plugin description. Max length is 2000 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.hostingService">hostingService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a></code> | hosting_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.pluginCategory">pluginCategory</a></code> | <code>string</code> | Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#project GoogleApihubPlugin#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the plugin. Max length is 50 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#location GoogleApihubPlugin#location}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
the specified id is already used by another Plugin resource in the API hub
instance.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, overall resource name which will be
of format
'projects/{project}/locations/{location}/plugins/{plugin}',
its length is limited to 1000 characters and valid characters are
/a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#plugin_id GoogleApihubPlugin#plugin_id}

---

##### `actionsConfig`<sup>Optional</sup> <a name="actionsConfig" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.actionsConfig"></a>

```typescript
public readonly actionsConfig: IResolvable | GoogleApihubPluginActionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>[]

actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#actions_config GoogleApihubPlugin#actions_config}

---

##### `configTemplate`<sup>Optional</sup> <a name="configTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.configTemplate"></a>

```typescript
public readonly configTemplate: GoogleApihubPluginConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a>

config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#config_template GoogleApihubPlugin#config_template}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The plugin description. Max length is 2000 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.documentation"></a>

```typescript
public readonly documentation: GoogleApihubPluginDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#documentation GoogleApihubPlugin#documentation}

---

##### `hostingService`<sup>Optional</sup> <a name="hostingService" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.hostingService"></a>

```typescript
public readonly hostingService: GoogleApihubPluginHostingService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a>

hosting_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#hosting_service GoogleApihubPlugin#hosting_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pluginCategory`<sup>Optional</sup> <a name="pluginCategory" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.pluginCategory"></a>

```typescript
public readonly pluginCategory: string;
```

- *Type:* string

Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#plugin_category GoogleApihubPlugin#plugin_category}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#project GoogleApihubPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApihubPluginTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#timeouts GoogleApihubPlugin#timeouts}

---

### GoogleApihubPluginConfigTemplate <a name="GoogleApihubPluginConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginConfigTemplate: googleApihubPlugin.GoogleApihubPluginConfigTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.property.additionalConfigTemplate">additionalConfigTemplate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]</code> | additional_config_template block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.property.authConfigTemplate">authConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a></code> | auth_config_template block. |

---

##### `additionalConfigTemplate`<sup>Optional</sup> <a name="additionalConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.property.additionalConfigTemplate"></a>

```typescript
public readonly additionalConfigTemplate: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]

additional_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#additional_config_template GoogleApihubPlugin#additional_config_template}

---

##### `authConfigTemplate`<sup>Optional</sup> <a name="authConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.property.authConfigTemplate"></a>

```typescript
public readonly authConfigTemplate: GoogleApihubPluginConfigTemplateAuthConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a>

auth_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#auth_config_template GoogleApihubPlugin#auth_config_template}

---

### GoogleApihubPluginConfigTemplateAdditionalConfigTemplate <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginConfigTemplateAdditionalConfigTemplate: googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.id">id</a></code> | <code>string</code> | ID of the config variable. Must be unique within the configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType">valueType</a></code> | <code>string</code> | Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.description">description</a></code> | <code>string</code> | Description. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions">enumOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]</code> | enum_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions">multiSelectOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]</code> | multi_select_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag represents that this 'ConfigVariable' must be provided for a PluginInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex">validationRegex</a></code> | <code>string</code> | Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the config variable. Must be unique within the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#value_type GoogleApihubPlugin#value_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

##### `enumOptions`<sup>Optional</sup> <a name="enumOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions"></a>

```typescript
public readonly enumOptions: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]

enum_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#enum_options GoogleApihubPlugin#enum_options}

---

##### `multiSelectOptions`<sup>Optional</sup> <a name="multiSelectOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions"></a>

```typescript
public readonly multiSelectOptions: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]

multi_select_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#multi_select_options GoogleApihubPlugin#multi_select_options}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag represents that this 'ConfigVariable' must be provided for a PluginInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#required GoogleApihubPlugin#required}

---

##### `validationRegex`<sup>Optional</sup> <a name="validationRegex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex"></a>

```typescript
public readonly validationRegex: string;
```

- *Type:* string

Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#validation_regex GoogleApihubPlugin#validation_regex}

---

### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions: googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName">displayName</a></code> | <code>string</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id">id</a></code> | <code>string</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description">description</a></code> | <code>string</code> | Description of the option. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions: googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName">displayName</a></code> | <code>string</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id">id</a></code> | <code>string</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description">description</a></code> | <code>string</code> | Description of the option. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

### GoogleApihubPluginConfigTemplateAuthConfigTemplate <a name="GoogleApihubPluginConfigTemplateAuthConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginConfigTemplateAuthConfigTemplate: googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes">supportedAuthTypes</a></code> | <code>string[]</code> | The list of authentication types supported by the plugin. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | service_account block. |

---

##### `supportedAuthTypes`<sup>Required</sup> <a name="supportedAuthTypes" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes"></a>

```typescript
public readonly supportedAuthTypes: string[];
```

- *Type:* string[]

The list of authentication types supported by the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#supported_auth_types GoogleApihubPlugin#supported_auth_types}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#service_account GoogleApihubPlugin#service_account}

---

### GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount <a name="GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount: googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account to be used for authenticating request. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#service_account GoogleApihubPlugin#service_account}

---

### GoogleApihubPluginDocumentation <a name="GoogleApihubPluginDocumentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginDocumentation: googleApihubPlugin.GoogleApihubPluginDocumentation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation.property.externalUri">externalUri</a></code> | <code>string</code> | The uri of the externally hosted documentation. |

---

##### `externalUri`<sup>Optional</sup> <a name="externalUri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation.property.externalUri"></a>

```typescript
public readonly externalUri: string;
```

- *Type:* string

The uri of the externally hosted documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#external_uri GoogleApihubPlugin#external_uri}

---

### GoogleApihubPluginHostingService <a name="GoogleApihubPluginHostingService" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginHostingService: googleApihubPlugin.GoogleApihubPluginHostingService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService.property.serviceUri">serviceUri</a></code> | <code>string</code> | The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality. |

---

##### `serviceUri`<sup>Optional</sup> <a name="serviceUri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality.

This information is only required for
user defined plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#service_uri GoogleApihubPlugin#service_uri}

---

### GoogleApihubPluginTimeouts <a name="GoogleApihubPluginTimeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

const googleApihubPluginTimeouts: googleApihubPlugin.GoogleApihubPluginTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#create GoogleApihubPlugin#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#delete GoogleApihubPlugin#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#create GoogleApihubPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_apihub_plugin#delete GoogleApihubPlugin#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubPluginActionsConfigList <a name="GoogleApihubPluginActionsConfigList" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginActionsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.get"></a>

```typescript
public get(index: number): GoogleApihubPluginActionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginActionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>[]

---


### GoogleApihubPluginActionsConfigOutputReference <a name="GoogleApihubPluginActionsConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.triggerModeInput">triggerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.triggerMode">triggerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `triggerModeInput`<sup>Optional</sup> <a name="triggerModeInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.triggerModeInput"></a>

```typescript
public readonly triggerModeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginActionsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get"></a>

```typescript
public get(index: number): GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.get"></a>

```typescript
public get(index: number): GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get"></a>

```typescript
public get(index: number): GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions">putEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions">putMultiSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions">resetEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions">resetMultiSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex">resetValidationRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnumOptions` <a name="putEnumOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions"></a>

```typescript
public putEnumOptions(value: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]

---

##### `putMultiSelectOptions` <a name="putMultiSelectOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions"></a>

```typescript
public putMultiSelectOptions(value: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnumOptions` <a name="resetEnumOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions"></a>

```typescript
public resetEnumOptions(): void
```

##### `resetMultiSelectOptions` <a name="resetMultiSelectOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions"></a>

```typescript
public resetMultiSelectOptions(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetValidationRegex` <a name="resetValidationRegex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex"></a>

```typescript
public resetValidationRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions">enumOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions">multiSelectOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput">enumOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput">multiSelectOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput">validationRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex">validationRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enumOptions`<sup>Required</sup> <a name="enumOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions"></a>

```typescript
public readonly enumOptions: GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a>

---

##### `multiSelectOptions`<sup>Required</sup> <a name="multiSelectOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions"></a>

```typescript
public readonly multiSelectOptions: GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumOptionsInput`<sup>Optional</sup> <a name="enumOptionsInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput"></a>

```typescript
public readonly enumOptionsInput: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multiSelectOptionsInput`<sup>Optional</sup> <a name="multiSelectOptionsInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput"></a>

```typescript
public readonly multiSelectOptionsInput: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validationRegexInput`<sup>Optional</sup> <a name="validationRegexInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput"></a>

```typescript
public readonly validationRegexInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validationRegex`<sup>Required</sup> <a name="validationRegex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex"></a>

```typescript
public readonly validationRegex: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>

---


### GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference <a name="GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount"></a>

```typescript
public putServiceAccount(value: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput">supportedAuthTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes">supportedAuthTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---

##### `supportedAuthTypesInput`<sup>Optional</sup> <a name="supportedAuthTypesInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput"></a>

```typescript
public readonly supportedAuthTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedAuthTypes`<sup>Required</sup> <a name="supportedAuthTypes" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes"></a>

```typescript
public readonly supportedAuthTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubPluginConfigTemplateAuthConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a>

---


### GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference <a name="GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---


### GoogleApihubPluginConfigTemplateOutputReference <a name="GoogleApihubPluginConfigTemplateOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate">putAdditionalConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate">putAuthConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate">resetAdditionalConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate">resetAuthConfigTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalConfigTemplate` <a name="putAdditionalConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate"></a>

```typescript
public putAdditionalConfigTemplate(value: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]

---

##### `putAuthConfigTemplate` <a name="putAuthConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate"></a>

```typescript
public putAuthConfigTemplate(value: GoogleApihubPluginConfigTemplateAuthConfigTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a>

---

##### `resetAdditionalConfigTemplate` <a name="resetAdditionalConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate"></a>

```typescript
public resetAdditionalConfigTemplate(): void
```

##### `resetAuthConfigTemplate` <a name="resetAuthConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate"></a>

```typescript
public resetAuthConfigTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate">additionalConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.authConfigTemplate">authConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference">GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput">additionalConfigTemplateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput">authConfigTemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalConfigTemplate`<sup>Required</sup> <a name="additionalConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate"></a>

```typescript
public readonly additionalConfigTemplate: GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList</a>

---

##### `authConfigTemplate`<sup>Required</sup> <a name="authConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.authConfigTemplate"></a>

```typescript
public readonly authConfigTemplate: GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference">GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a>

---

##### `additionalConfigTemplateInput`<sup>Optional</sup> <a name="additionalConfigTemplateInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput"></a>

```typescript
public readonly additionalConfigTemplateInput: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]

---

##### `authConfigTemplateInput`<sup>Optional</sup> <a name="authConfigTemplateInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput"></a>

```typescript
public readonly authConfigTemplateInput: GoogleApihubPluginConfigTemplateAuthConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubPluginConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a>

---


### GoogleApihubPluginDocumentationOutputReference <a name="GoogleApihubPluginDocumentationOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resetExternalUri">resetExternalUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalUri` <a name="resetExternalUri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resetExternalUri"></a>

```typescript
public resetExternalUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.externalUriInput">externalUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.externalUri">externalUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalUriInput`<sup>Optional</sup> <a name="externalUriInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.externalUriInput"></a>

```typescript
public readonly externalUriInput: string;
```

- *Type:* string

---

##### `externalUri`<sup>Required</sup> <a name="externalUri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.externalUri"></a>

```typescript
public readonly externalUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubPluginDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a>

---


### GoogleApihubPluginHostingServiceOutputReference <a name="GoogleApihubPluginHostingServiceOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resetServiceUri">resetServiceUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceUri` <a name="resetServiceUri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resetServiceUri"></a>

```typescript
public resetServiceUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.serviceUriInput">serviceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceUriInput`<sup>Optional</sup> <a name="serviceUriInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.serviceUriInput"></a>

```typescript
public readonly serviceUriInput: string;
```

- *Type:* string

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubPluginHostingService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a>

---


### GoogleApihubPluginTimeoutsOutputReference <a name="GoogleApihubPluginTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApihubPlugin } from '@cdktf/provider-google-beta'

new googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubPluginTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a>

---



