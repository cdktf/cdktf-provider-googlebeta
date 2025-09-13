# `googleContactCenterInsightsAnalysisRule` Submodule <a name="`googleContactCenterInsightsAnalysisRule` Submodule" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAnalysisRule <a name="GoogleContactCenterInsightsAnalysisRule" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

new googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule(scope: Construct, id: string, config: GoogleContactCenterInsightsAnalysisRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig">GoogleContactCenterInsightsAnalysisRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig">GoogleContactCenterInsightsAnalysisRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector">putAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnalysisPercentage">resetAnalysisPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnnotatorSelector">resetAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetConversationFilter">resetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnnotatorSelector` <a name="putAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector"></a>

```typescript
public putAnnotatorSelector(value: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContactCenterInsightsAnalysisRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAnalysisPercentage` <a name="resetAnalysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnalysisPercentage"></a>

```typescript
public resetAnalysisPercentage(): void
```

##### `resetAnnotatorSelector` <a name="resetAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnnotatorSelector"></a>

```typescript
public resetAnnotatorSelector(): void
```

##### `resetConversationFilter` <a name="resetConversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetConversationFilter"></a>

```typescript
public resetConversationFilter(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsAnalysisRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsAnalysisRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAnalysisRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference">GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentageInput">analysisPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelectorInput">annotatorSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilterInput">conversationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentage">analysisPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilter">conversationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `annotatorSelector`<sup>Required</sup> <a name="annotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelector"></a>

```typescript
public readonly annotatorSelector: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference">GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analysisPercentageInput`<sup>Optional</sup> <a name="analysisPercentageInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentageInput"></a>

```typescript
public readonly analysisPercentageInput: number;
```

- *Type:* number

---

##### `annotatorSelectorInput`<sup>Optional</sup> <a name="annotatorSelectorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelectorInput"></a>

```typescript
public readonly annotatorSelectorInput: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `conversationFilterInput`<sup>Optional</sup> <a name="conversationFilterInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilterInput"></a>

```typescript
public readonly conversationFilterInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContactCenterInsightsAnalysisRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analysisPercentage`<sup>Required</sup> <a name="analysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentage"></a>

```typescript
public readonly analysisPercentage: number;
```

- *Type:* number

---

##### `conversationFilter`<sup>Required</sup> <a name="conversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilter"></a>

```typescript
public readonly conversationFilter: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

const googleContactCenterInsightsAnalysisRuleAnnotatorSelector: googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels">issueModels</a></code> | <code>string[]</code> | The issue model to run. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers">phraseMatchers</a></code> | <code>string[]</code> | The list of phrase matchers to run. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig">qaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | qa_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator">runEntityAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the entity annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator">runIntentAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the intent annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator">runInterruptionAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the interruption annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator">runIssueModelAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator">runPhraseMatcherAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the active phrase matcher annotator(s). |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator">runQaAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the QA annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator">runSentimentAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the sentiment annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator">runSilenceAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the silence annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator">runSummarizationAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the summarization annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | summarization_config block. |

---

##### `issueModels`<sup>Optional</sup> <a name="issueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels"></a>

```typescript
public readonly issueModels: string[];
```

- *Type:* string[]

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#issue_models GoogleContactCenterInsightsAnalysisRule#issue_models}

---

##### `phraseMatchers`<sup>Optional</sup> <a name="phraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers"></a>

```typescript
public readonly phraseMatchers: string[];
```

- *Type:* string[]

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#phrase_matchers GoogleContactCenterInsightsAnalysisRule#phrase_matchers}

---

##### `qaConfig`<sup>Optional</sup> <a name="qaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig"></a>

```typescript
public readonly qaConfig: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#qa_config GoogleContactCenterInsightsAnalysisRule#qa_config}

---

##### `runEntityAnnotator`<sup>Optional</sup> <a name="runEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator"></a>

```typescript
public readonly runEntityAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_entity_annotator GoogleContactCenterInsightsAnalysisRule#run_entity_annotator}

---

##### `runIntentAnnotator`<sup>Optional</sup> <a name="runIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator"></a>

```typescript
public readonly runIntentAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_intent_annotator GoogleContactCenterInsightsAnalysisRule#run_intent_annotator}

---

##### `runInterruptionAnnotator`<sup>Optional</sup> <a name="runInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator"></a>

```typescript
public readonly runInterruptionAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_interruption_annotator GoogleContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

##### `runIssueModelAnnotator`<sup>Optional</sup> <a name="runIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator"></a>

```typescript
public readonly runIssueModelAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_issue_model_annotator GoogleContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

##### `runPhraseMatcherAnnotator`<sup>Optional</sup> <a name="runPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator"></a>

```typescript
public readonly runPhraseMatcherAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_phrase_matcher_annotator GoogleContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

##### `runQaAnnotator`<sup>Optional</sup> <a name="runQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator"></a>

```typescript
public readonly runQaAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_qa_annotator GoogleContactCenterInsightsAnalysisRule#run_qa_annotator}

---

##### `runSentimentAnnotator`<sup>Optional</sup> <a name="runSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator"></a>

```typescript
public readonly runSentimentAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_sentiment_annotator GoogleContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

##### `runSilenceAnnotator`<sup>Optional</sup> <a name="runSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator"></a>

```typescript
public readonly runSilenceAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_silence_annotator GoogleContactCenterInsightsAnalysisRule#run_silence_annotator}

---

##### `runSummarizationAnnotator`<sup>Optional</sup> <a name="runSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator"></a>

```typescript
public readonly runSummarizationAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_summarization_annotator GoogleContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

##### `summarizationConfig`<sup>Optional</sup> <a name="summarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig"></a>

```typescript
public readonly summarizationConfig: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#summarization_config GoogleContactCenterInsightsAnalysisRule#summarization_config}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

const googleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig: googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList">scorecardList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | scorecard_list block. |

---

##### `scorecardList`<sup>Optional</sup> <a name="scorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList"></a>

```typescript
public readonly scorecardList: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#scorecard_list GoogleContactCenterInsightsAnalysisRule#scorecard_list}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

const googleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct: googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions">qaScorecardRevisions</a></code> | <code>string[]</code> | List of QaScorecardRevisions. |

---

##### `qaScorecardRevisions`<sup>Optional</sup> <a name="qaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions"></a>

```typescript
public readonly qaScorecardRevisions: string[];
```

- *Type:* string[]

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#qa_scorecard_revisions GoogleContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

const googleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig: googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile">conversationProfile</a></code> | <code>string</code> | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel">summarizationModel</a></code> | <code>string</code> | Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]. |

---

##### `conversationProfile`<sup>Optional</sup> <a name="conversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile"></a>

```typescript
public readonly conversationProfile: string;
```

- *Type:* string

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#conversation_profile GoogleContactCenterInsightsAnalysisRule#conversation_profile}

---

##### `summarizationModel`<sup>Optional</sup> <a name="summarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel"></a>

```typescript
public readonly summarizationModel: string;
```

- *Type:* string

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#summarization_model GoogleContactCenterInsightsAnalysisRule#summarization_model}

---

### GoogleContactCenterInsightsAnalysisRuleConfig <a name="GoogleContactCenterInsightsAnalysisRuleConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

const googleContactCenterInsightsAnalysisRuleConfig: googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.location">location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage">analysisPercentage</a></code> | <code>number</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.conversationFilter">conversationFilter</a></code> | <code>string</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.displayName">displayName</a></code> | <code>string</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#location GoogleContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#active GoogleContactCenterInsightsAnalysisRule#active}

---

##### `analysisPercentage`<sup>Optional</sup> <a name="analysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage"></a>

```typescript
public readonly analysisPercentage: number;
```

- *Type:* number

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#analysis_percentage GoogleContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotatorSelector`<sup>Optional</sup> <a name="annotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector"></a>

```typescript
public readonly annotatorSelector: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#annotator_selector GoogleContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.conversationFilter"></a>

```typescript
public readonly conversationFilter: string;
```

- *Type:* string

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#conversation_filter GoogleContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#display_name GoogleContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsAnalysisRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#timeouts GoogleContactCenterInsightsAnalysisRule#timeouts}

---

### GoogleContactCenterInsightsAnalysisRuleTimeouts <a name="GoogleContactCenterInsightsAnalysisRuleTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

const googleContactCenterInsightsAnalysisRuleTimeouts: googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

new googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig">putQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig">putSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels">resetIssueModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers">resetPhraseMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig">resetQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator">resetRunEntityAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator">resetRunIntentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator">resetRunInterruptionAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator">resetRunIssueModelAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator">resetRunPhraseMatcherAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator">resetRunQaAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator">resetRunSentimentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator">resetRunSilenceAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator">resetRunSummarizationAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig">resetSummarizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQaConfig` <a name="putQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig"></a>

```typescript
public putQaConfig(value: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `putSummarizationConfig` <a name="putSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig"></a>

```typescript
public putSummarizationConfig(value: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `resetIssueModels` <a name="resetIssueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels"></a>

```typescript
public resetIssueModels(): void
```

##### `resetPhraseMatchers` <a name="resetPhraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers"></a>

```typescript
public resetPhraseMatchers(): void
```

##### `resetQaConfig` <a name="resetQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig"></a>

```typescript
public resetQaConfig(): void
```

##### `resetRunEntityAnnotator` <a name="resetRunEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator"></a>

```typescript
public resetRunEntityAnnotator(): void
```

##### `resetRunIntentAnnotator` <a name="resetRunIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator"></a>

```typescript
public resetRunIntentAnnotator(): void
```

##### `resetRunInterruptionAnnotator` <a name="resetRunInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator"></a>

```typescript
public resetRunInterruptionAnnotator(): void
```

##### `resetRunIssueModelAnnotator` <a name="resetRunIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator"></a>

```typescript
public resetRunIssueModelAnnotator(): void
```

##### `resetRunPhraseMatcherAnnotator` <a name="resetRunPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator"></a>

```typescript
public resetRunPhraseMatcherAnnotator(): void
```

##### `resetRunQaAnnotator` <a name="resetRunQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator"></a>

```typescript
public resetRunQaAnnotator(): void
```

##### `resetRunSentimentAnnotator` <a name="resetRunSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator"></a>

```typescript
public resetRunSentimentAnnotator(): void
```

##### `resetRunSilenceAnnotator` <a name="resetRunSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator"></a>

```typescript
public resetRunSilenceAnnotator(): void
```

##### `resetRunSummarizationAnnotator` <a name="resetRunSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator"></a>

```typescript
public resetRunSummarizationAnnotator(): void
```

##### `resetSummarizationConfig` <a name="resetSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig"></a>

```typescript
public resetSummarizationConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig">qaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput">issueModelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput">phraseMatchersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput">qaConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput">runEntityAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput">runIntentAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput">runInterruptionAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput">runIssueModelAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput">runPhraseMatcherAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput">runQaAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput">runSentimentAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput">runSilenceAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput">runSummarizationAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput">summarizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels">issueModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers">phraseMatchers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator">runEntityAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator">runIntentAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator">runInterruptionAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator">runIssueModelAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator">runPhraseMatcherAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator">runQaAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator">runSentimentAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator">runSilenceAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator">runSummarizationAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qaConfig`<sup>Required</sup> <a name="qaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig"></a>

```typescript
public readonly qaConfig: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a>

---

##### `summarizationConfig`<sup>Required</sup> <a name="summarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig"></a>

```typescript
public readonly summarizationConfig: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a>

---

##### `issueModelsInput`<sup>Optional</sup> <a name="issueModelsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput"></a>

```typescript
public readonly issueModelsInput: string[];
```

- *Type:* string[]

---

##### `phraseMatchersInput`<sup>Optional</sup> <a name="phraseMatchersInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput"></a>

```typescript
public readonly phraseMatchersInput: string[];
```

- *Type:* string[]

---

##### `qaConfigInput`<sup>Optional</sup> <a name="qaConfigInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput"></a>

```typescript
public readonly qaConfigInput: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `runEntityAnnotatorInput`<sup>Optional</sup> <a name="runEntityAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput"></a>

```typescript
public readonly runEntityAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runIntentAnnotatorInput`<sup>Optional</sup> <a name="runIntentAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput"></a>

```typescript
public readonly runIntentAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runInterruptionAnnotatorInput`<sup>Optional</sup> <a name="runInterruptionAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput"></a>

```typescript
public readonly runInterruptionAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runIssueModelAnnotatorInput`<sup>Optional</sup> <a name="runIssueModelAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput"></a>

```typescript
public readonly runIssueModelAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runPhraseMatcherAnnotatorInput`<sup>Optional</sup> <a name="runPhraseMatcherAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput"></a>

```typescript
public readonly runPhraseMatcherAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runQaAnnotatorInput`<sup>Optional</sup> <a name="runQaAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput"></a>

```typescript
public readonly runQaAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSentimentAnnotatorInput`<sup>Optional</sup> <a name="runSentimentAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput"></a>

```typescript
public readonly runSentimentAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSilenceAnnotatorInput`<sup>Optional</sup> <a name="runSilenceAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput"></a>

```typescript
public readonly runSilenceAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSummarizationAnnotatorInput`<sup>Optional</sup> <a name="runSummarizationAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput"></a>

```typescript
public readonly runSummarizationAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `summarizationConfigInput`<sup>Optional</sup> <a name="summarizationConfigInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput"></a>

```typescript
public readonly summarizationConfigInput: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `issueModels`<sup>Required</sup> <a name="issueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels"></a>

```typescript
public readonly issueModels: string[];
```

- *Type:* string[]

---

##### `phraseMatchers`<sup>Required</sup> <a name="phraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers"></a>

```typescript
public readonly phraseMatchers: string[];
```

- *Type:* string[]

---

##### `runEntityAnnotator`<sup>Required</sup> <a name="runEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator"></a>

```typescript
public readonly runEntityAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runIntentAnnotator`<sup>Required</sup> <a name="runIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator"></a>

```typescript
public readonly runIntentAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runInterruptionAnnotator`<sup>Required</sup> <a name="runInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator"></a>

```typescript
public readonly runInterruptionAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runIssueModelAnnotator`<sup>Required</sup> <a name="runIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator"></a>

```typescript
public readonly runIssueModelAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runPhraseMatcherAnnotator`<sup>Required</sup> <a name="runPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator"></a>

```typescript
public readonly runPhraseMatcherAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runQaAnnotator`<sup>Required</sup> <a name="runQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator"></a>

```typescript
public readonly runQaAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSentimentAnnotator`<sup>Required</sup> <a name="runSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator"></a>

```typescript
public readonly runSentimentAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSilenceAnnotator`<sup>Required</sup> <a name="runSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator"></a>

```typescript
public readonly runSilenceAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSummarizationAnnotator`<sup>Required</sup> <a name="runSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator"></a>

```typescript
public readonly runSummarizationAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

new googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList">putScorecardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList">resetScorecardList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScorecardList` <a name="putScorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList"></a>

```typescript
public putScorecardList(value: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `resetScorecardList` <a name="resetScorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList"></a>

```typescript
public resetScorecardList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList">scorecardList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput">scorecardListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scorecardList`<sup>Required</sup> <a name="scorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList"></a>

```typescript
public readonly scorecardList: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a>

---

##### `scorecardListInput`<sup>Optional</sup> <a name="scorecardListInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput"></a>

```typescript
public readonly scorecardListInput: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

new googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions">resetQaScorecardRevisions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQaScorecardRevisions` <a name="resetQaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions"></a>

```typescript
public resetQaScorecardRevisions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput">qaScorecardRevisionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions">qaScorecardRevisions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qaScorecardRevisionsInput`<sup>Optional</sup> <a name="qaScorecardRevisionsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput"></a>

```typescript
public readonly qaScorecardRevisionsInput: string[];
```

- *Type:* string[]

---

##### `qaScorecardRevisions`<sup>Required</sup> <a name="qaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions"></a>

```typescript
public readonly qaScorecardRevisions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

new googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile">resetConversationProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel">resetSummarizationModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConversationProfile` <a name="resetConversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile"></a>

```typescript
public resetConversationProfile(): void
```

##### `resetSummarizationModel` <a name="resetSummarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel"></a>

```typescript
public resetSummarizationModel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput">conversationProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput">summarizationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile">conversationProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel">summarizationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationProfileInput`<sup>Optional</sup> <a name="conversationProfileInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput"></a>

```typescript
public readonly conversationProfileInput: string;
```

- *Type:* string

---

##### `summarizationModelInput`<sup>Optional</sup> <a name="summarizationModelInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput"></a>

```typescript
public readonly summarizationModelInput: string;
```

- *Type:* string

---

##### `conversationProfile`<sup>Required</sup> <a name="conversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile"></a>

```typescript
public readonly conversationProfile: string;
```

- *Type:* string

---

##### `summarizationModel`<sup>Required</sup> <a name="summarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel"></a>

```typescript
public readonly summarizationModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---


### GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAnalysisRule } from '@cdktf/provider-google-beta'

new googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsAnalysisRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

---



